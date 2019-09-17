import React, { useRef, useCallback, useState } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const LM = ({ E, A, N, UF, MF }) => Math.round((E * A) / (UF * MF * N))
const A = (l, w) => l * w

const IndexPage = () => {
  const w = useRef(null)
  const l = useRef(null)
  const E = useRef(null)
  const UF = useRef(null)
  const MF = useRef(null)
  const [lm, setLm] = useState(987)
  const cb = useCallback(() => {
    setLm(
      LM({
        E: Number(E.current.value),
        A: A(Number(l.current.value), Number(w.current.value)),
        N: 1,
        UF: Number(UF.current.value),
        MF: Number(MF.current.value),
      })
    )
  }, [])

  return (
    <Layout>
      <SEO title="室內空間光通量（流明）計算" />
      <p>
        <label>
          空間長度（公尺）：
          <input
            type="number"
            min="0"
            step="0.1"
            defaultValue="3"
            ref={l}
            onChange={cb}
          />
        </label>
      </p>
      <p>
        <label>
          空間寬度（公尺）：
          <input
            type="number"
            min="0"
            step="0.1"
            defaultValue="5"
            ref={w}
            onChange={cb}
          />
        </label>
      </p>
      <p>
        <label>
          用途：
          <select ref={E} onChange={cb}>
            <option value="20">儲藏室</option>
            <option value="30">走廊、樓梯</option>
            <option value="50" selected>
              通用
            </option>
            <option value="150">娛樂</option>
            <option value="200">餐桌、料理</option>
            <option value="300">化妝</option>
            <option value="500">閱讀、寫作</option>
            <option value="750">手工藝、縫紉</option>
          </select>
        </label>
      </p>
      <p>
        <label>
          照明率（％）：
          <input
            ref={UF}
            type="number"
            step="0.01"
            defaultValue="0.76"
            min="0"
            max="1"
            onChange={cb}
          />
        </label>
      </p>
      <p>
        <label>
          維修係數（％）：
          <input
            ref={MF}
            type="number"
            step="0.01"
            defaultValue="1"
            min="0"
            max="1"
            onChange={cb}
          />
        </label>
      </p>
      <p>
        <strong>建議流明：{lm} lm</strong>
      </p>
      <hr />
      <p>
        <h4>參考資料</h4>
        <ul>
          <li>
            <a href="https://www.courcasa.com/p/bJdr">
              客廳或房間要幾盞燈才夠亮？來看CNS怎麼說
            </a>
          </li>
          <li>
            <a href="http://power.lifebook.com.tw/Videos/tabid/3038/ProdID/2827/Default.aspx">
              照明計算 : 照明設計 : 意象科技 Power Designer 配電系統設計軟體
            </a>
          </li>
        </ul>
      </p>
    </Layout>
  )
}

export default IndexPage
