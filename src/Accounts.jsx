import { AccountsContainer } from './components/AccountsStyle';

import { useState } from 'react'

import DatePicker from './components/Accounts/DatePicker'
import FormDialog from './components/Accounts/FormDialog';

const Accounts = () => {
  const userName = localStorage.getItem('username');
  
  const [count, setCount] = useState(0)
  //datepicker
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()

  //list
  const [date, setDate] = useState()
  const [content, setContent] = useState('')
  const [amount, setAmount] = useState()
  const [g, setG] = useState('')

  const [list, setList] = useState()
  const group = [];
  const lists = [
    {date: "", content:"", amount: "", group :"" },
    {},
  ];
  console.log(startDate);



  return (
    <>
      <AccountsContainer>
        <div className = "contHeader">
              <p className = "title">{userName}님의 가계부</p>
              <div className = "groupFromTo">
                <DatePicker 
                  className = "btnFrom"
                  label={"시작 날짜"}
                  value={startDate}
                  onChange={(value)=>{
                    setStartDate(value)
                  }}
                />
                
                <p className = "sorting">부터</p>
                <DatePicker 
                  className = "btnTo"
                  label={"종료 날짜"}
                  value={endDate}
                  onChange={(newValue)=>{
                    setEndDate(newValue)
                  }}
                />
                <p className = "sorting">까지</p>
                <button className = "btnSearch">보기</button>
              </div>
              <div className = "groupInput">
                <button className = "btnInput">입력</button>
                <FormDialog />
              </div>
          </div>
          <div className = "contBody">
              <table className = "tableWidth">
                  <thead>
                      <tr>
                          <th className = "widthFixed">날짜</th>
                          <th>내용</th>
                          <th>금액</th>
                          <th>그룹A</th>
                          <th>그룹B</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className = "widthFixed">2023-05-17</td>
                          <td>박수련장인 베개</td>
                          <td className = "colorAmount income">50,000</td>
                          <td>생활용품</td>
                          <td>카카오뱅크카드</td>
                      </tr>
                      

                  </tbody>
              </table>
          </div>
      </AccountsContainer>
    </>
  );
};

export default Accounts;
