import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@material-ui/core";

export default function Popup(props){
    const {title, children, openPopup, setOpenPopup} = props;

    return (
        <Dialog open={openPopup}>
            <Button onClick={()=> setOpenPopup(false)}>X</Button>
            <DialogTitle>
                <div>Chỉnh sửa tài khoản</div>
            </DialogTitle>
            <DialogContent>
                {children}
            </DialogContent>

        </Dialog>
    )

}