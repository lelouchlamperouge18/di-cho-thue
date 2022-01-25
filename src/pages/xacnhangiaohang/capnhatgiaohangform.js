import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "../../components/controls/Controls";
import { useForm, Form } from '../../components/useForm';

const TrangThaiItems = [
    { id: 'Đang giao', title: 'Đang giao' },
    { id: 'Đã giao', title: 'Đã giao' },
    { id: 'Đổi trả', title: 'Đổi trả' },
]


const initialFValues = {
    ID: 0,
    VaiTro: '',
    Username: '',
    TrangThai: '',
}



export default function TKForm(props) {
    const { addOrEdit, recordForEdit } = props

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
            temp.fullName = fieldValues.fullName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('departmentId' in fieldValues)
            temp.departmentId = fieldValues.departmentId.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            // addOrEdit(values, resetForm);
        }
    }

    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

    return (
        <Form onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={6}>

                </Grid>
                <Grid item xs={6}>
                    <Controls.RadioGroup
                        name="TrangThai"
                        label="TrangThai"
                        value={values.TrangThai}
                        onChange={handleInputChange}
                        items={TrangThaiItems}
                    />

                    <div>
                        <Controls.Button
                            type="capnhat"
                            text="Cập nhật" />
                        <Controls.Button
                            text="Thoát"
                            color="default"
                            // onClick={resetForm} 
                            />
                    </div>
                </Grid>
            </Grid>
        </Form>
    )
}
