import { clerkClient } from '@clerk/clerk-sdk-node';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  try {
    const { data: users } = await clerkClient.users.getUserList();

    // Filter users based on the search query
    const filteredUsers = users
      .filter((user) =>
        `${user.firstName || ''} ${user.lastName || ''}`.toLowerCase().includes(searchQuery)
      )
      .map((user) => ({
        id: user.id,
        name: `${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username || 'Unknown User',
        email: user.emailAddresses[0]?.emailAddress || 'No Email',
        imageUrl: user.imageUrl || '',
      }));

    return NextResponse.json(filteredUsers);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
