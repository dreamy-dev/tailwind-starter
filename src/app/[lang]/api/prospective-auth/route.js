// import Credentials from "next-auth/providers/credentials"


// export const { auth, signIn, signOut } = NextAuth({
//     providers: [
//         Credentials({
//             // The name to display on the sign in form (e.g. 'Sign in with...')
//             name: 'Credentials',
//             // The credentials is used to generate a suitable form on the sign in page.
//             // You can specify whatever fields you are expecting to be submitted.
//             // e.g. domain, username, password, 2FA token, etc.
//             // You can pass any HTML attribute to the <input> tag through the object.
//             credentials: {
//                 username: { label: "Username", type: "text", placeholder: "jsmith" },
//                 password: { label: "Password", type: "password" }
//             },
//             async authorize(credentials, req) {
//                 const cr = { "Username": "nkv2ju3jr4jds3hf77vn", "Password": "9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv" }
//                 // You need to provide your own logic here that takes the credentials
//                 // submitted and returns either a object representing a user or value
//                 // that is false/null if the credentials are invalid.
//                 // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//                 // You can also use the `req` object to obtain additional parameters
//                 // (i.e., the request IP address)
//                 const res = await fetch("https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials", {
//                     method: 'POST',
//                     body: JSON.stringify(cr),
//                     headers: { "Content-Type": "application/json" }
//                 })
//                 const user = await res.json()

//                 // If no error and we have user data, return it
//                 if (res.ok && user) {
//                     return user
//                 }
//                 // Return null if user data could not be retrieved
//                 return null
//             }
//         })
//     ]
// })

import axios from 'axios';
import { NextResponse } from 'next/server';
// import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
export async function POST(req, res) {
    // export async function GET(req, res) {
    // const method = "GET"

    const cr = { "Username": "nkv2ju3jr4jds3hf77vn", "Password": "9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv" }
    // Call an external API endpoint to get posts
    // const accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsib2h3cyJdLCJzY29wZSI6WyJSRUFEIiwiSk9CX0FCTyJdLCJtZWRpdW0iOlsiMTAwMDQ3MCIsIjEwMDA0NzAiLCIxMDAxNTE1IiwiMTAwMTUxNSJdLCJleHAiOjIwMjU1Mjg4MjQsImF1dGhvcml0aWVzIjpbIlJPTEVfU0VSVklDRSJdLCJqdGkiOiJkMWY3ZWQ3Zi0yOTI3LTQzZjctOTY0MC1lM2I2NTBiN2YyMmQiLCJjbGllbnRfaWQiOiJkdzc4ZXdydXN5Mm12bTU5bjd0OSJ9.eQwBkinPCKoueEpUPVAKRlkfv3eb0Mo6tv-ui2CjfInH_808S4MhQSd89LMfRLfoyhu0RMBwflTHWD3u4UBW0KVgeQw2fL08z9DR-H1yY6Ys8mDlumKrZWdXRsuDwsIJCaFzgO2ciVnQ-BpJImusWvoSw5BUX3lH971bHHawxB8AnsO7H5PYCnvOZG2PmDwowyxmZFIBMOZXnH2VVZtNO8Ooggubsw1cuvnuimDYAbTnK_f0PkGSUwG8Jv8-H5uxeWAhe0c0PfYxu09GRjgQhunBSh7i5q59bA2FcaCM-WVRZA2L8W8ODrk_7a0A3yJY6xjjMSG9nO7yMWTpR7Oyaw"
    // const response = await fetch('https://stadler-filter-webservice.ohws.jobbooster.prospective.ch/v1/medium/1000470/jobs/?offset=0&limit=100&lang=de', {
    //     headers: {
    //         Authorization: `Bearer ${accessToken}`,
    //     },
    // })
    const url = 'https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials'
    const username = 'nkv2ju3jr4jds3hf77vn'
    const password = '9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv'
    const basicAuth = 'Basic ' + btoa(username + ':' + password);

    axios.post(url, {}, {
        auth: {
            username: username,
            password: password
        }
    }).then(function (response) {
        console.log(response.data.access_token, 'Authenticated');
    }).catch(function (error) {
        console.log('Error on Authentication');
    });
    // try {

    //     const res = await fetch(url, {}, {
    //         auth: {
    //             'username': 'nkv2ju3jr4jds3hf77vn',
    //             'password': '9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv',
    //             "grant_type": "client_credentials"
    //         }
    //     });
    //     // "Content-Type": "application/x-www-form-urlencoded" 
    //     // const initialResponse = await fetch(url, {
    //     //     method: 'POST',
    //     //     body: JSON.stringify(cr),
    //     //     headers: { "Content-Type": "application/json" }
    //     // })
    //     const tokenAccess = await res.json()
    //     console.log("data in route", tokenAccess)
    //     return NextResponse.json({ message: tokenAccess });
    //     // return data
    //     // return res.status(200).json({ message: 'Hello from Next.js!' })
    //     // return res.status(200).send({ allJobs })
    //     // return NextResponse.json({ data })
    // }
    // catch (err) {
    //     return NextResponse.json({ message: "Bye World" });
    // }

    // const jobs = await response.json()
    // console.log(jobs)
    // return jobs;
}

// // export default handler;
// import axios from 'axios';
// import { getSession } from "next-auth/react";

// export async function POST(req, res) {
//     // const session = await getSession();
//     const authHeader = 'Basic nkv2ju3jr4jds3hf77vn:9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv'
//     const apiUrl = 'https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials';

//     // Extract credentials from request headers or body
//     try {

//         const initialResponse = await fetch(apiUrl, {
//             headers: {
//                 Authorization: authHeader,
//             },
//         })

//         const token = await initialResponse.json()
//         console.log("data in route", token)
//         return NextResponse.json({ message: token });
//         // return data
//         // return res.status(200).json({ message: 'Hello from Next.js!' })
//         // return res.status(200).send({ allJobs })
//         // return NextResponse.json({ data })
//     }
//     catch (err) {
//         return NextResponse.json({ message: "Bye World" });
//     }
//     // try {
//     //     // Prepare the authorization header
//     //     const authHeader = 'Basic ' + 'nkv2ju3jr4jds3hf77vn:9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv'

//     //     // Configure the request to the external API
//     //     const config = {
//     //         headers: {
//     //             'Authorization': authHeader,
//     //         }
//     //     };



//     //     // URL of the external API
//     //     const apiUrl = 'https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials';

//     //     // Request the token from the external API
//     //     const response = await axios.post(apiUrl, config);

//     //     console.log(response, "response")

//     //     // Forward the token to your client
//     //     return NextResponse.json(response);
//     // } catch (error) {
//     //     // Handle errors, such as authentication failure or connection errors
//     //     if (error.response) {
//     //         // The request was made and the server responded with a status code
//     //         // that falls out of the range of 2xx
//     //         res.status(error.response.status).json({ message: error.response.data.message });
//     //     } else if (error.request) {
//     //         // The request was made but no response was received
//     //         res.status(500).json({ message: 'No response received from external API' });
//     //     } else {
//     //         // Something happened in setting up the request that triggered an Error
//     //         res.status(500).json({ message: 'Error setting up request to external API' });
//     //     }
//     // }

//     // return NextResponse.json(session);
// }

// import NextAuth from 'next-auth';
// import Providers from 'next-auth/react';

// export default NextAuth({
//     providers: [
//         Providers.Credentials({
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             credentials: { "Username": "nkv2ju3jr4jds3hf77vn", "Password": "9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv" },
//             async authorize(credentials, req) {
//                 // You need to provide your own logic here that takes the credentials
//                 // submitted and returns either a object representing a user or value
//                 // that is false/null if the credentials are invalid.
//                 // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
//                 // You can also use the `req` object to obtain additional parameters
//                 // (i.e., the request IP address)
//                 const res = await fetch("https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials", {
//                     method: 'POST',
//                     body: JSON.stringify(credentials),
//                     headers: { "Content-Type": "application/json" }
//                 })
//                 const user = await res.json()

//                 return NextResponse.json(user);

//                 // If no error and we have user data, return it
//                 // if (res.ok && user) {
//                 //     return user
//                 // }
//                 // // Return null if user data could not be retrieved
//                 // return null
//             }
//         }),
//     ],
//     session: {
//         jwt: true,
//     },

// });

// import { signIn } from "next-auth/react";
// import { NextResponse } from 'next/server';
// // import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0'
// export async function POST(req, res) {
//     const url = "https://stage.auth.prospective.ch/oauth/token?grant_type=client_credentials"
//     // const callback = {
//     //     grant_type: 'client_credentials',
//     //     client_id: 'nkv2ju3jr4jds3hf77vn',
//     //     client_secret: '9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv'
//     // }
//     var session_url = 'http://api_address/api/session_endpoint';
//     var username = 'nkv2ju3jr4jds3hf77vn';
//     var password = '9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv';
//     var basicAuth = 'Basic ' + btoa(username + ':' + password);
//     axios.post(url, {}, {
//         headers: { 'Authorization': + basicAuth }
//     }).then(function (response) {
//         console.log('Authenticated');
//     }).catch(function (error) {
//         console.log('Error on Authentication');
//     });

//     try {

//         // Attempt to sign in using the credentials (email and password).
// const res = await fetch(url, { "Content-Type": "application/x-www-form-urlencoded" }, {
//     auth: {
//         username: 'nkv2ju3jr4jds3hf77vn',
//         password: '9ae28xbg9nmpy9tk6vvxek9japxcf54bw5fn7euv'
//     }
// });



//         console.log(res); // Log the authentication response.
//         return NextResponse.json(res);
//     } catch (error) {

//     }
// }