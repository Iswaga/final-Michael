"use client";
import PDFComponent from "@/components/PDFComponent";
import { fetchUsers } from "@/services/api";
import { PDFViewer } from "@react-pdf/renderer";
import { useEffect, useState } from "react";

export default function Home() {
    const [usersData, setUsersData] = useState<UserResponse>();
    const initializeUserData = async () => {
        const users: UserResponse = await fetchUsers();
        setUsersData(users);
    };

    useEffect(() => {
        initializeUserData();
    });
    return (
        <main className=" h-screen p-24">
            <div className="flex w-full  items-center justify-between">
                <h1 className="font-bold text-2xl">Users List</h1>
            </div>
            <PDFViewer className="border border-blue-500 w-full h-screen">
                <PDFComponent users={usersData?.data} />
            </PDFViewer>
        </main>
    );
}
