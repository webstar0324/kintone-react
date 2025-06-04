import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

const roots = {};

const LaborInputForm = () => {
  const [date, setDate] = useState('2025-01-01');
  const [person, setPerson] = useState('');
  const [category, setCategory] = useState('社員');
  const [inputFields, setInputFields] = useState({
    totalWage: 0,
    contactTime: 0,
    contactCount: 0,
  });

  const handleChange = (e) => {
    setInputFields({
      ...inputFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="header-section">
        <label>日付
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <label>担当者
          <select value={person} onChange={(e) => setPerson(e.target.value)}>
            <option value="">---</option>
            {/* Populate options dynamically if needed */}
          </select>
        </label>

        <div className="button-group">
          <button
            className={category === '社員' ? 'active' : ''}
            onClick={() => setCategory('社員')}
          >
            社員
          </button>
          <button
            className={category === '外注' ? 'active' : ''}
            onClick={() => setCategory('外注')}
          >
            外注
          </button>
        </div>
      </div>

      <div className="main-section">
        <button className="kbtn orange">工賃を登録</button>

        <div className="totals">
          <label>工賃合計
            <input
              type="number"
              name="totalWage"
              value={inputFields.totalWage}
              onChange={handleChange}
            />
          </label>
        </div>

        <table className="record-table">
          <thead>
            <tr>
              <th>伝票番号</th>
              <th>顧客名</th>
              <th>種別</th>
              <th>裏地</th>
              <th>作業内容</th>
              <th>小計</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6">本日の登録はありません</td>
            </tr>
          </tbody>
        </table>

        <div className="input-section">
          <label>接客時間
            <input
              type="number"
              name="contactTime"
              value={inputFields.contactTime}
              onChange={handleChange}
            /> 分
          </label>
          <label>声掛け回数
            <input
              type="number"
              name="contactCount"
              value={inputFields.contactCount}
              onChange={handleChange}
            /> 回 (名)
          </label>
        </div>
      </div>
    </div>
  );
};

const renderLaborForm = () => {
  const container = kintone.app.record.getSpaceElement('labor_input_space');
  if (!container) return;

  if (!roots['main']) {
    roots['main'] = createRoot(container);
  } else {
    container.innerHTML = '';
  }

  roots['main'].render(<LaborInputForm />);
};

kintone.events.on(['app.record.create.show', 'app.record.edit.show'], (e) => {
  renderLaborForm();
  return e;
});
