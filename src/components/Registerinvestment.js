import { Form, Input, Button } from 'antd';
import './Registerinvestment.css'
function Registerinvestment() {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className='register'>
            <h2>Investment Registeration</h2>
            <Form
                name="userForm"
                layout='vertical'
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Customer Fullname"
                    name="customer_name"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please input customer fullname!',
                        },
                        {
                            pattern: /^[a-zA-Z]+(([ -][a-zA-Z ])?[a-zA-Z]*)*$/,
                            message: 'Name  can contain only alphabet',
                        }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Phone No"
                    name="phone"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please input customer telophone number!',
                        },
                        {
                            pattern: /^[0-9]{8,14}$/,
                            message: 'Valid Phone number contains at least 9 numeric value',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Account No"
                    name="account_no"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please input customer account number!',
                        },
                        {
                            pattern: /^[0-9]*$/,
                            message: 'Account number contains only Numbers',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Investment Amount"
                    name="inv_amount"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter investment amount',
                        },
                        {
                            pattern: /^(-?\d+\.?\d{0,2})$/,
                            message: 'Enter amount with max 2 decimal places',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Investment Date"
                    name="inv_date"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter investment date',
                        },
                    ]}
                >
                    <Input type="date" />
                </Form.Item>
                <Form.Item
                    label="Attachment document"
                    name="inv_attachment"
                    validateFirst={true}
                    rules={[
                        {
                            required: true,
                            message: 'Please attach the scanned investment document',
                        },
                    ]}
                >
                    <Input type="file" name="inv_attachment" accept="application/pdf" />
                </Form.Item>


                <Form.Item>
                    <Button type="primary" htmlType="submit" >Register Investment</Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Registerinvestment