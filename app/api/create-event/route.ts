import { google } from 'googleapis';
import { calendar_v3 } from 'googleapis/build/src/apis/calendar/v3';
import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';

const SCOPES = ['https://www.googleapis.com/auth/calendar'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { summary, description, startTime, endTime } = body;

    // Google Credentials Load Karo
    const credentials = JSON.parse(fs.readFileSync(process.env.GOOGLE_CREDENTIALS_PATH!, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // Event Object
    const event: calendar_v3.Schema$Event = {
      summary,
      description,
      start: {
        dateTime: startTime,
        timeZone: 'Asia/Kolkata',
      },
      end: {
        dateTime: endTime,
        timeZone: 'Asia/Kolkata',
      },
      conferenceData: {
        createRequest: {
          requestId: `${Date.now()}`,
        },
      },
    };

    // 🟢 Insert Event Properly
    const response = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID!,
      requestBody: event,  // 🔑 'resource' ki jagah 'requestBody' use karna hai
      conferenceDataVersion: 1,
    });

    const eventData = response.data;

    return NextResponse.json({
      eventLink: eventData.htmlLink,
      meetLink: eventData.conferenceData?.entryPoints?.[0]?.uri
    });

  } catch (error) {
    console.error('Error creating event:', error);
    return NextResponse.json({ error: 'Failed to create event' }, { status: 500 });
  }
}
