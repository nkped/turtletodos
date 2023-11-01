import connectMongoDB from "@/lib/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";


//get one turtle
export async function GET(request, { params: {id} }) {
    console.log('id from get one turtle route', id)
    connectMongoDB()
    const topic = await Topic.findOne({_id: id})
    console.log('topic from id route', topic)
    return NextResponse.json({topic}, {status: 200})
}








//edit one turtle
export async function PUT() {}



