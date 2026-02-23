import React, { useState, useMemo } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const CGPACalculator = () => {
    const [semesters, setSemesters] = useState([
        { id: Date.now(), num: '1', sgpa: '', credits: '' }
    ])

    const addSemester = () => {
        setSemesters([...semesters, { id: Date.now(), num: (semesters.length + 1).toString(), sgpa: '', credits: '' }])
    }

    const removeSemester = (id) => {
        if (semesters.length > 1) {
            setSemesters(semesters.filter(s => s.id !== id))
        }
    }

    const updateSemester = (id, field, value) => {
        setSemesters(semesters.map(s => {
            if (s.id === id) {
                if ((field === 'sgpa' || field === 'credits') && parseFloat(value) < 0) return s
                return { ...s, [field]: value }
            }
            return s
        }))
    }

    const stats = useMemo(() => {
        let totalCredits = 0
        let totalWeightedSGPA = 0

        semesters.forEach(s => {
            const sgpa = parseFloat(s.sgpa) || 0
            const credits = parseFloat(s.credits) || 0
            totalCredits += credits
            totalWeightedSGPA += (sgpa * credits)
        })

        const cgpa = totalCredits > 0 ? (totalWeightedSGPA / totalCredits).toFixed(2) : '0.00'
        return { totalCredits, cgpa }
    }, [semesters])

    return (
        <div className="glass-card">
            <div className="calc-header">
                <h2>CGPA Calculator</h2>
            </div>

            <div className="semesters-list">
                {semesters.map((sem, index) => (
                    <div key={sem.id} className="row-item">
                        <div>
                            <span className="row-label">Semester Number</span>
                            <input
                                type="text"
                                id={`sem-num-${sem.id}`}
                                name={`sem-num-${sem.id}`}
                                value={sem.num}
                                onChange={(e) => updateSemester(sem.id, 'num', e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="row-label">SGPA</span>
                            <input
                                type="number"
                                id={`sem-sgpa-${sem.id}`}
                                name={`sem-sgpa-${sem.id}`}
                                placeholder="0.00"
                                value={sem.sgpa}
                                min="0"
                                max="10"
                                step="0.01"
                                onChange={(e) => updateSemester(sem.id, 'sgpa', e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="row-label">Total Credits</span>
                            <input
                                type="number"
                                id={`sem-credits-${sem.id}`}
                                name={`sem-credits-${sem.id}`}
                                placeholder="0"
                                value={sem.credits}
                                min="0"
                                onChange={(e) => updateSemester(sem.id, 'credits', e.target.value)}
                            />
                        </div>
                        <button
                            className="btn-danger"
                            onClick={() => removeSemester(sem.id)}
                            disabled={semesters.length === 1}
                            style={{ marginTop: '22px' }}
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>

            <button className="btn-primary" onClick={addSemester} style={{ marginBottom: '1.5rem' }}>
                <Plus size={20} style={{ marginRight: '8px' }} />
                Add Semester
            </button>

            <div className="calc-footer">
                <div className="total-info">
                    <p>Analyzing <b>{semesters.length}</b> semesters</p>
                    <p>Accumulated Credits: <b>{stats.totalCredits}</b></p>
                </div>
                <div className="result-box">
                    <span className="result-label">Cumulative CGPA</span>
                    <div className="result-value">{stats.cgpa}</div>
                </div>
            </div>
        </div>
    )
}

export default CGPACalculator
