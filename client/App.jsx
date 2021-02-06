import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    const now = new Date()
    const yyyy = now.getFullYear()
    let mm = now.getMonth()+1
    if(mm<10) mm = `0${mm}`
    let dd = now.getDate()
    if(dd<10) dd = `0${dd}`
    const [id, setId] = useState(''); // 關懷編號
    const [serviceDate, setServiceDate] = useState(`${yyyy}-${mm}-${dd}`); // 服務日期
    const [serviceTime, setServiceTime] = useState(''); // 服務時間
    const [gender, setGender] = useState(''); // 性別
    const [name, setName] = useState(''); // 姓名
    const [birthday, setBirthday] = useState(''); // 出生日期
    const [phone, setpPhone] = useState(''); // 連絡電話
    const [serviceStatus, setServiceStatus] = useState(''); // 服務狀態
    const [serviceContent, setServiceContent] = useState(null); // 服務內容
    const [livingArea, setLivingArea] = useState(''); //居住區域
    const [caseFamilySubsidy, setCaseFamilySubsidy] = useState(''); //案家補助身分別
    const [employmentSituation, setEmploymentSituation] = useState(''); //就業情形
    const [causeOfFailure, setCauseOfFailure] = useState(''); //致障原因
    const [domicileaddress, setDomicileaddress] = useState(''); //戶籍住址
    const [idNumber, setIdNumber] = useState(''); //身分證字號
    const [oldSystemCategory, setOldSystemCategory] = useState(''); //舊制類別
    const [contactPersonName, setContactPersonName] = useState(''); //聯絡人姓名
    const [obstacleCategory, setObstacleCategory] = useState(''); //障礙類別
    const [barrierLevel, setBarrierLevel] = useState(''); //障礙等級
    const [ageGroup, setAgeGroup] = useState(''); //年齡層
    const [serviceObjectSource, setServiceObjectSource] = useState(''); //服務對象來源


    const handleChangeIdNumber = async e => {
        const inputValue = e.target.value
        setIdNumber(inputValue)


        const data = await axios
            .post('/api/form/search', {idNumber: inputValue})
            .then(res => res.data)
            .catch((err) => console.error(err));

        if(data.result) {
            console.log(data.data)
            let {data:{
                gender,
                name,
                birthday,
                phone,
                domicileaddress,
                contactPersonName
            }} = data

            birthday = birthday.substring(0,10)
            setGender(gender)
            setName(name)
            setBirthday(birthday)
            setpPhone(phone)
            setDomicileaddress(domicileaddress)
            setContactPersonName(contactPersonName)
        }
            

    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(gender === '') return alert('請輸入性別')

        const formValue = {
            id,
            serviceDate,
            serviceTime,
            gender,
            name,
            birthday,
            phone,
            serviceStatus,
            serviceContent,
            livingArea,
            caseFamilySubsidy,
            employmentSituation,
            causeOfFailure,
            domicileaddress,
            idNumber,
            oldSystemCategory,
            contactPersonName,
            obstacleCategory,
            barrierLevel,
            ageGroup,
            serviceObjectSource,
        };

        axios
            .post('/api/form', formValue)
            .then((res) => alert('新增成功'))
            .catch((err) =>{ 
                alert('新增失敗')
                console.error(err)});

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
            <hr/>
            <FormItem>
                <Label>身分證字號</Label>
                <Input value={idNumber} onChange={handleChangeIdNumber} required />
            </FormItem>
            <FormItem>
                <Label>性別</Label>
                <Select 
                value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    >
                    <option hidden>請選擇</option>
                    <option value="男">男</option>
                    <option value="女">女</option>
                </Select>
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
                <Label>戶籍住址</Label>
                <Input value={domicileaddress} onChange={e => setDomicileaddress(e.target.value)} required />
            </FormItem>
            <FormItem>
                <Label>聯絡人姓名</Label>
                <Input value={contactPersonName} onChange={e => setContactPersonName(e.target.value)} />
            </FormItem>
            <hr />
            <FormItem>
                <Label>服務內容</Label>
                <Select
                    value={serviceContent}
                    onChange={(e) => setServiceContent(e.target.value)}
                    
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
            <FormItem>
                <Label>居住區域</Label>
                <Select
                    value={livingArea}
                    onChange={(e) => setLivingArea(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="金城鎮">金城鎮</option>
                    <option value="金湖鎮">金湖鎮</option>
                    <option value="金沙鎮">金沙鎮</option>
                    <option value="金寧鄉">金寧鄉</option>
                    <option value="烈嶼鄉">烈嶼鄉</option>
                    <option value="烏坵鄉">烏坵鄉</option>
                    <option value="其他">其他</option>
                    
                </Select>
            </FormItem>
            <FormItem>
                <Label>案家補助身分別</Label>
                <Select
                    value={caseFamilySubsidy}
                    onChange={(e) => setCaseFamilySubsidy(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="一般戶">一般戶</option>
                    <option value="中低收入戶">中低收入戶</option>
                    <option value="低收入戶">低收入戶</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>就業情形</Label>
                <Select
                    value={employmentSituation}
                    onChange={(e) => setEmploymentSituation(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="就業者">就業者</option>
                    <option value="有就業意願，無就業機會者">有就業意願，無就業機會者</option>
                    <option value="無就業意願者">無就業意願者</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>致障原因</Label>
                <Select
                    value={causeOfFailure}
                    onChange={(e) => setCauseOfFailure(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="先天">先天</option>
                    <option value="疾病">疾病</option>
                    <option value="意外">意外</option>
                    <option value="交通事故">交通事故</option>
                    <option value="職業傷害">職業傷害</option>
                    <option value="戰爭">戰爭</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>舊制類別</Label>
                <Input value={oldSystemCategory} onChange={e => setOldSystemCategory(e.target.value)} />
            </FormItem>
            <FormItem>
                <Label>障礙類別</Label>
                <Select
                    value={obstacleCategory}
                    onChange={(e) => setObstacleCategory(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="第一類">第一類</option>
                    <option value="第二類">第二類</option>
                    <option value="第三類">第三類</option>
                    <option value="第四類">第四類</option>
                    <option value="第五類">第五類</option>
                    <option value="第六類">第六類</option>
                    <option value="第七類">第七類</option>
                    <option value="第八類">第八類</option>
                    <option value="舊制轉換新制暫無法歸類者">舊制轉換新制暫無法歸類者</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>障礙等級</Label>
                <Select
                    value={barrierLevel}
                    onChange={(e) => setBarrierLevel(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="輕度">輕度</option>
                    <option value="中度">中度</option>
                    <option value="重度">重度</option>
                    <option value="極重度">極重度</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>年齡層</Label>
                <Select
                    value={ageGroup}
                    onChange={(e) => setAgeGroup(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="0-未滿3歲">0-未滿3歲</option>
                    <option value="3-未滿6歲">3-未滿6歲</option>
                    <option value="6-未滿12歲">6-未滿12歲</option>
                    <option value="12-未滿15歲">12-未滿15歲</option>
                    <option value="15-未滿18歲">15-未滿18歲</option>
                    <option value="18-未滿30歲">18-未滿30歲</option>
                    <option value="30-未滿45歲">30-未滿45歲</option>
                    <option value="45-未滿50歲">45-未滿50歲</option>
                    <option value="50-未滿60歲">50-未滿60歲</option>
                    <option value="60-未滿65歲">60-未滿65歲</option>
                    <option value="65歲以上">65歲以上</option>
                    <option value="其他">其他</option>
                </Select>
            </FormItem>
            <FormItem>
                <Label>服務對象來源</Label>
                <Select
                    value={serviceObjectSource}
                    onChange={(e) => setServiceObjectSource(e.target.value)}
                    required
                >
                    <option hidden>請選擇</option>
                    <option value="縣府名單">縣府名單</option>
                    <option value="其他">其他</option>
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
    width: 120px;
    font-size: 20px;
    margin-right: 10px;
    text-align: right;
`;

const Input = styled.input`
width: 300px;
    padding: 8px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid grey;
    box-sizing: border-box;
`;

const Select = styled.select`
width: 300px;
    padding: 8px 15px;
    font-size: 20px;
    border-radius: 5px;
    border: 2px solid grey;
    box-sizing: border-box;
`;
