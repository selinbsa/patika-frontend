import { useEffect, useRef, useState } from 'react'

export default function BmiCalculator() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')
  const pointerRef = useRef(null)

  function onSubmit(e) {
    e.preventDefault()
    const h = parseFloat(height)
    const w = parseFloat(weight)
    setError('')
    if (!h || !w) { setResult(null); setError('Please enter both height and weight.'); return } 
    if (h < 50 || h > 250 || w < 10 || w > 300) { setResult(null); setError('Values out of range. Height: 50–250 cm, Weight: 10–300 kg.'); return }
    const m = h / 100
    const bmi = w / (m * m)
    const cat = bmi < 18.5 ? 'Underweight'
      : bmi < 25 ? 'Normal'
      : bmi < 30 ? 'Overweight'
      : bmi < 35 ? 'Obese'
      : 'Extremely Obese'
    const badge = bmi < 18.5 ? 'u1' : bmi < 25 ? 'n' : bmi < 30 ? 'o1' : bmi < 35 ? 'o2' : 'o3'
    setResult({ bmi: bmi.toFixed(1), cat, badge })
  }

  useEffect(() => {
    if (!result || !pointerRef.current) return
    const bmi = parseFloat(result.bmi)
    const MIN = 15, MAX = 40
    const clamped = Math.max(MIN, Math.min(MAX, bmi))
    const percent = ((clamped - MIN) / (MAX - MIN)) * 100
    pointerRef.current.style.left = percent + '%'
    pointerRef.current.title = `BMI: ${result.bmi}`
  }, [result])

  return (
    <section id="bmi" className="section">
      <div className="container bmi-grid">
        <div className="bmi-copy">
          <h2>BMI Calculator</h2>
          <p className="muted">Enter height (cm) and weight (kg).</p>
          <form id="bmi-form" onSubmit={onSubmit}>
            <div className="row">
              <label htmlFor="height">Height (cm)</label>
              <input id="height" type="number" min="50" max="250" value={height} onChange={e=>setHeight(e.target.value)} />
            </div>
            <div className="row">
              <label htmlFor="weight">Weight (kg)</label>
              <input id="weight" type="number" min="10" max="300" value={weight} onChange={e=>setWeight(e.target.value)} />
            </div>
            <button className="btn btn-primary" type="submit">Calculate</button>
          </form>
          <div id="bmi-result" className="bmi-result">
            {error && <div role="alert" style={{marginTop:'.5rem'}}>{error}</div>}
            {result && <>BMI: <strong>{result.bmi}</strong> — <em>{result.cat}</em><span className={`badge ${result.badge}`}>{result.cat}</span></>}
          </div>
        </div>
        <div className="bmi-meter">
          <img src="/assets/bmi-index.jpg" alt="BMI scale" />
          <div className="bmi-pointer" ref={pointerRef} />
        </div>
      </div>
    </section>
  )
}
