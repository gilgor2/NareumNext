import axios from 'axios';
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest) {
    const searchText = request.nextUrl.searchParams.get('searchText');
    const response = await axios.get(`https://openapi.naver.com/v1/search/image?query=${searchText}&filter=small&display=20`, {
        headers: {
            'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID,
            'X-Naver-Client-Secret': process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET,
        },
});
        return Response.json(response.data.items, { status: 200 });
}
