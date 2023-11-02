import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


//get one turtle
export async function GET(request, { params: { id } }) {
    console.log('id from get one turtle route', id)
    connectMongoDB()
    const topic = await Topic.findOne({_id: id})
    console.log('topic from id route', topic)
    return NextResponse.json({topic}, {status: 200})
}


//edit one turtle
export async function PUT(request, { params: { id } }) {
    console.log('update-id from update one turtle route', id)
    const { newTitle: title, newDescription: description } = await request.json()
    connectMongoDB()
    await Topic.findByIdAndUpdate( id, { title, description})
    return NextResponse.json({message: 'turtle was updated..'}, {status: 200})
}



