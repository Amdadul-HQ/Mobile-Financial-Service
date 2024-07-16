require("dotenv").config();
const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

const corsOptions = {
  origin: ["http://localhost:5173", "http://localhost:5174"],
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://rimonamdadul301:8enfTEuMZ1MRMN1w@cluster0.6vc9q5p.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    const usersCollection = client.db("MFS").collection("users");
    // await client.connect();

    // User insart
    app.post("/user", async (req, res) => {
      const user = req.body;
      console.log(user);
      const email = user.email;
      const phone = user.phoneNumber;
      const pin = user.pin;
      const isExist = await usersCollection.findOne({ email });
      if (isExist) {
        return res.send({ message: "User Already Exist" });
      }
      const hasedPin = bcrypt.hashSync(pin, 14);
      const result = await usersCollection.insertOne({
        ...user,
        pin: hasedPin,
      });
      res.send(result);
    });

    app.post("/login", async (req, res) => {
      const userCredential = req.body;
      console.log(userCredential);
      const email = userCredential.email;
      const pin = userCredential.pin;
      const currentUser = await usersCollection.findOne({ email });
      if (!currentUser) {
        return res.send({ message: "This email is not Exist" });
      }
      const isValiedPin = await bcrypt.compare(pin, currentUser.pin);
      console.log(isValiedPin);
      if (!isValiedPin) {
        return res.status(401).send({ message: "Pin is Incorrect" });
      }
      if (isValiedPin === true) {
        return res.send({ message: "login successful" }).status(200);
      }
    });

    // send mony api
    app.post("/sendmoney", async (req, res) => {
      const sendMoneyData = req.body;
      const senderEmail = sendMoneyData.senderEmail;
      const pin = sendMoneyData.pin;
      const amount = sendMoneyData.amount;
      const receiverphone = sendMoneyData.receiverphone;
      console.log(sendMoneyData);
      const sender = await usersCollection.findOne({ email:senderEmail });
    if(sender.phoneNumber == receiverphone){
      return res.send({message:"You can't send money yourself"})
    }
      if (!sender) {
        return res.status(401).send({ message: "Sender not Exist" });
      }
      if (sender) {
        const isValiedPin = await bcrypt.compare(pin, sender.pin);
        console.log(isValiedPin);
        if (!isValiedPin) {
          return res.status(401).send({ message: "Pin is Incorrect" });
        }
        if (isValiedPin === true) {
          const receiver = await usersCollection.findOne({phoneNumber:receiverphone})
          const addMoney = {
            $inc:{totalAmount:amount}
          }
          const removeMoney = {
            $inc:{totalAmount:-(amount+(amount*0.05))}
          }
          const result = await usersCollection.updateOne({phoneNumber:receiverphone},addMoney)
          const result2 = await usersCollection.updateOne({email:senderEmail},removeMoney)
          return res.send({ message: "Send Money Successful",result2 }).status(200);
        }
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.use("/", (req, res) => {
  res.send("server is running");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
