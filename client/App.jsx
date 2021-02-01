import styled from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
    return (
        <form>
            <input type="text" placeholder="關懷編號" />
            <input type="text" placeholder="服務日期" />
            <input type="text" placeholder="服務時間" />
            <input type="text" placeholder="姓名" />
            <select name="" id="">
                <option value="">男</option>
                <option value="">女</option>
            </select>
            <input type="text" placeholder="出生日期" />
            <input type="text" placeholder="連絡電話" />
            <input type="text" placeholder="服務內容" />
            <input type="text" placeholder="服務狀態" />
        </form>
    );
};

export default App;
