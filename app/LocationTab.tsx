import React from "react";

export default function LocationTab() {
    return (
        <div
            style={{
                gridArea: "location",
            }}>
            <h1 className="text-3xl my-3">Our Location</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.5907697259781!2d90.18285865817482!3d25.095715374996935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757c5420605dad9%3A0x2332c11d8745a0f9!2z4Ka44Kaw4KaV4Ka-4Kaw4Ka_IOCmqOCmvuCmnOCmruCngeCmsiDgprjgp43gpq7gp4PgpqTgpr8g4Kau4Ka54Ka-4Kas4Ka_4Kam4KeN4Kav4Ka-4Kay4Kef!5e0!3m2!1sen!2sbd!4v1653301051275!5m2!1sen!2sbd"
                className="w-full h-[350px]"></iframe>
        </div>
    );
}
