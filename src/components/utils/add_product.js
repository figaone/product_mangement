import React,{ useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import  {  useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addProduct } from '../../store/actions';

const AddProduct = () => {
    const dispatch = useDispatch();
    const textInput1 = useRef();
    const textInput2 = useRef();
    const notify = () => toast.success("Product Added",{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    
    const handleSubmit = (e) =>{
        
       
        e.preventDefault();
        const value1 = textInput1.current.value;
        const value2 = textInput2.current.value;
        console.log(value1,value2)
        dispatch(addProduct({
                "id":6,
                name:value1,
                prices:[
                    {
                        "id": 9,
                        "price":value2,
                    }
                ]
        
            
        })
        )
    }

    return(
        <>
            <div className="newsletter_container">
                <h1>Add new product info</h1>
                <div className="form">
                    <Form onSubmit={handleSubmit} className="mt-4">
                        <Form.Group>
                            <Form.Control
                                type="text"
                                placeholder="name of product"
                                name="product name"
                                ref={textInput1}
                            />

                            <br />
                            <br />
                            <div>
                                <Form.Control
                                    type="text"
                                    placeholder="price of product"
                                    name="product price"
                                    ref={textInput2}
                                />
                            </div>

                        </Form.Group>
                        <br />
                        <Button onClick={notify} variant="primary" type="submit">
                            Add Product
                        </Button>
                        <ToastContainer 
                        />
                    </Form>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
        </>
    )
}

export default AddProduct;