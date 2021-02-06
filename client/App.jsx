import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    const [id, setId] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [name, setName] = useState('');
    const [birthday, setBirthday] = useState('');
    const [phone, setpPhone] = useState('');
    const [serviceStatus, setServiceStatus] = useState('');
    const [serviceContent, setServiceContent] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const dt = {
            id,
            serviceDate,
            serviceTime,
            name,
            birthday,
            phone,
            serviceStatus,
            serviceContent,
        };

        axios
            .post('/api/form', dt)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => console.error(err));

        console.log('handleSubmit');
    };
    return (
        <Form onSubmit={handleSubmit}>
            <FormItem>
                <Label>關懷編號</Label>
                <Input
                    type="text"
                    placeholder="關懷編號"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
            </FormItem>
            <FormItem>
                <Label>服務日期</Label>
                <Input
                    type="date"
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                    required
                />
            </FormItem>
            <FormItem>
                <Label>服務時間</Label>
                <Input
                    type="text"
                    placeholder="服務時間"
                    value={serviceTime}
                    onChange={(e) => setServiceTime(e.target.value)}
                />
            </FormItem>
            <FormItem>
                <Label>姓名</Label>
                <Input
                    type="text"
                    placeholder="姓名"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </FormItem>
            <FormItem>
                <Label>性別</Label>
                <Select required>
                    <option hidden>請選擇</option>
                    <option value="male">男</option>
                    <option value="female">女</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>出生日期</Label>
                <Input
                    type="date"
                    placeholder="出生日期"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required
                />
            </FormItem>
            <FormItem>
                <Label>連絡電話</Label>
                <Input
                    type="text"
                    placeholder="連絡電話"
                    value={phone}
                    onChange={(e) => setpPhone(e.target.value)}
                    required
                />
            </FormItem>
            <FormItem>
                <Label>服務內容</Label>
                <Select
                    value={serviceContent}
                    onChange={(e) => setServiceContent(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="電話評估">電話評估</option>
                    <option value="訪視評估">訪視評估</option>
                    <option value="資源轉介">資源轉介</option>
                    <option value="電話問安">電話問安</option>
                    <option value="訪視關懷">訪視關懷</option>
                    <option value="團體活動">團體活動</option>
                    <option value="專業人員外展服務">專業人員外展服務</option>
                    <option value="結束服務">結束服務</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>服務狀態</Label>
                <Select
                    value={serviceStatus}
                    onChange={(e) => setServiceStatus(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="安排訪視評估">安排訪視評估</option>
                    <option value="接受服務(電話問安)">
                        接受服務(電話問安)
                    </option>
                    <option value="接受服務(訪視關懷)">
                        接受服務(訪視關懷)
                    </option>
                    <option value="拒絕服務">拒絕服務</option>
                    <option value="未接聽電話">未接聽電話</option>
                    <option value="無服務需求">無服務需求</option>
                    <option value="暫不提供服務">暫不提供服務</option>
                    <option value="電話誤植">電話誤植</option>
                    <option value="繼續服務">繼續服務</option>
                    <option value="服務對象身故">服務對象身故</option>
                </Select>
            </FormItem>
            <button type="submit">送出</button>
        </Form>
    );
};

export default App;

const Form = styled.form`
    width: 500px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
`;
const FormItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

const Label = styled.label`
    font-size: 20px;
    margin-right: 10px;
`;

const Input = styled.input`
    padding: 8px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid grey;
`;

const Select = styled.select`
    padding: 8px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid grey;
`;
