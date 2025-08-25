import { TextInput } from "@repo/ui/input";
import { Button } from "@repo/ui/button";

 
 export default function RoomId (){
    return (
        <div style={{
            width : "100vw", 
            height: "100vh",
            justifyContent : "space-between",
            display : "flex",
            flexDirection : "column"
        }}> <div>
            Chat Room 
        </div>
        <div>
            <TextInput placeholder={"Send Messages...."}></TextInput>
            <Button children={"SEND"} appName={"Send"}></Button>
        </div>
        </div>
    )
 }