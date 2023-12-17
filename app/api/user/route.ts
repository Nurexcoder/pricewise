import { connectToDB } from "@/lib/db";
import { User } from "@/lib/db/models/user.model";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email } = await request.json();
    console.log(email,name)
    await connectToDB();
    const isUserExist = await User.findOne({ email });
    if (isUserExist) {
        return NextResponse.json(
          { message: "User login successfull" },
        )
        
    }
    const user = await User.create({
      name,
      email,
    });
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}

