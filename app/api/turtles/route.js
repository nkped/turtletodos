import Topic from "@/models/topic"
import connectMongoDB from "@/lib/mongodb"
import { NextResponse } from "next/server"

export async function GET() {
    await connectMongoDB()
    const topics = await Topic.find()
    return NextResponse.json({topics})
}


export async function POST(request) {
    const { title, description } = await request.json()
    console.log('title and description from route: ', title, description)
    connectMongoDB()
    await Topic.create({ title, description })
    
    return NextResponse.json({message: 'New turtle created'}, {status: 200})
}