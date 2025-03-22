import { clerkClient } from '@clerk/clerk-sdk-node';
import { NextResponse } from 'next/server';

export async function GET(req: Request, { params }: { params: { userId: string } }) {
  try {
    const user = await clerkClient.users.getUser(params.userId);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Filter the data if needed
    const filteredUser = {
      id: user.id,
      name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username || 'Unknown User',
      email: user.emailAddresses[0]?.emailAddress || 'No Email',
      imageUrl: user.imageUrl || '',
    };

    return NextResponse.json(filteredUser);
  } catch (error) {
    console.error('Error fetching user:', error);
    return NextResponse.json({ error: 'Failed to fetch user' }, { status: 500 });
  }
}
