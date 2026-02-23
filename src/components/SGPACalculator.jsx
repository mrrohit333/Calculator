import React, { useState, useMemo } from 'react'
import { Plus, Trash2 } from 'lucide-react'

const SGPACalculator = () => {
    const [subjects, setSubjects] = useState([
        { id: Date.now(), name: '', credits: '', gradePoints: '' }
    ])

    const addSubject = () => {
        setSubjects([...subjects, { id: Date.now(), name: '', credits: '', gradePoints: '' }])
    }

    const removeSubject = (id) => {
        if (subjects.length > 1) {
            setSubjects(subjects.filter(s => s.id !== id))
        }
    }

    const updateSubject = (id, field, value) => {
        setSubjects(subjects.map(s => {
            if (s.id === id) {
                // Validation: no negative values
                if ((field === 'credits' || field === 'gradePoints') && parseFloat(value) < 0) return s
                return { ...s, [field]: value }
            }
            return s
        }))
    }

    const stats = useMemo(() => {
        let totalCredits = 0
        let totalPoints = 0

        subjects.forEach(s => {
            const credits = parseFloat(s.credits) || 0
            const points = parseFloat(s.gradePoints) || 0
            totalCredits += credits
            totalPoints += (credits * points)
        })

        const sgpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : '0.00'
        return { totalCredits, sgpa }
    }, [subjects])

    return (
        <div className="glass-card">
            <div className="calc-header">
                <h2>SGPA Calculator</h2>
            </div>

            <div className="subjects-list">
                {subjects.map((sub, index) => (
                    <div key={sub.id} className="row-item">
                        <div>
                            <span className="row-label">Subject Name</span>
                            <input
                                type="text"
                                id={`sub-name-${sub.id}`}
                                name={`sub-name-${sub.id}`}
                                placeholder="e.g. Mathematics"
                                value={sub.name}
                                onChange={(e) => updateSubject(sub.id, 'name', e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="row-label">Credits</span>
                            <input
                                type="number"
                                id={`sub-credits-${sub.id}`}
                                name={`sub-credits-${sub.id}`}
                                placeholder="0"
                                value={sub.credits}
                                min="0"
                                onChange={(e) => updateSubject(sub.id, 'credits', e.target.value)}
                            />
                        </div>
                        <div>
                            <span className="row-label">Grade Points</span>
                            <input
                                type="number"
                                id={`sub-points-${sub.id}`}
                                name={`sub-points-${sub.id}`}
                                placeholder="0.0"
                                value={sub.gradePoints}
                                min="0"
                                max="10"
                                step="0.1"
                                onChange={(e) => updateSubject(sub.id, 'gradePoints', e.target.value)}
                            />
                        </div>
                        <button
                            className="btn-danger"
                            onClick={() => removeSubject(sub.id)}
                            disabled={subjects.length === 1}
                            style={{ marginTop: '22px' }}
                        >
                            <Trash2 size={18} />
                        </button>
                    </div>
                ))}
            </div>

            <button className="btn-primary" onClick={addSubject} style={{ marginBottom: '1.5rem' }}>
                <Plus size={20} style={{ marginRight: '8px' }} />
                Add Subject
            </button>

            <div className="calc-footer">
                <div className="total-info">
                    <p>Analyzing <b>{subjects.length}</b> subjects</p>
                    <p>Total Credits: <b>{stats.totalCredits}</b></p>
                </div>
                <div className="result-box">
                    <span className="result-label">Calculated SGPA</span>
                    <div className="result-value">{stats.sgpa}</div>
                </div>
            </div>
        </div>
    )
}

export default SGPACalculator
