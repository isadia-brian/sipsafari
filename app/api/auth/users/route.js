import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/MongoConnect";
import User from "@/models/UserModel";
import { hash } from "bcrypt";

export async function GET(request) {
  try {
    await connectMongoDB();
    const users = await User.find({});
    const statusCode = 200; // success status code
    return NextResponse.json({ users }, { status: statusCode });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Connecting", error },
      { status: 503 }
    );
  }
}

export async function POST(request) {
  const body = await request.json();

  let statusCode;

  // Assuming passed data is in JSON format: { fullName, email, mobile, password }
  const { email, password } = body;

  if (password == "" || email == "") {
    const statusCode = 400; // error status code
    return NextResponse.json(
      { message: "Fill in all fields" },
      { status: statusCode }
    );
  } else {
    try {
      await connectMongoDB();
      let userExist;

      userExist = await User.findOne({ email });

      if (!userExist) {
        const hashedPassword = await hash(password, 10);

        const newUser = new User({
          password: hashedPassword,

          email,
        });

        await newUser.save();
        statusCode = 201; // created status code

        return NextResponse.json(
          { message: "User created successfully" },
          { status: statusCode }
        );
      }

      if (userExist.email === email) {
        statusCode = 409; // error status code
        return NextResponse.json(
          { message: "This email has been taken" },
          { status: statusCode }
        );
      }
    } catch (error) {
      statusCode = 400; // error status code
      return NextResponse.json(
        { message: "Error connecting to database", error },
        { status: statusCode }
      );
    }
  }
}

export async function PATCH(request) {
  try {
    await connectMongoDB();

    //Extract  the ID and email from request body
    const { id, username, firstname, lastname, mobileNumber } =
      await request.json();

    //compare id to mongodb id and update all values
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        username,
        firstName: firstname || null,
        lastName: lastname || null,
        mobile: mobileNumber || null,
      },
      { new: true }
    );
    if (!updatedUser) {
      return NextResponse.json(
        { message: "No User with the Provided ID Found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "success" },
      { headers: { "content-type": "application/json" }, status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error Connecting", error },
      { status: 503 }
    );
  }
}
