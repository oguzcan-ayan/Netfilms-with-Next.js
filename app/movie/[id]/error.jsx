"use client";
import Link from 'next/link'
import React from 'react'

function Error404() {
    return (
        <div
            style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column"
            }}
        >
            <h1>An error has occurred. Sorry for that!</h1>
            <Link
                href="/"
                style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
            >
                Go Home
            </Link>
        </div>
    )
}

export default Error404