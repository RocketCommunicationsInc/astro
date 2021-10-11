import './styles.css'
import { React, useState } from 'react'
import {
    RuxInput,
    RuxSelect,
    RuxCheckbox,
    RuxCheckboxGroup,
    RuxRadio,
    RuxRadioGroup,
    RuxSlider,
    RuxButton,
} from '@astrouxds/react'
export default function App() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [countryRegion, setCountryRegion] = useState('United States')
    const [options, setOptions] = useState('')
    const [range, setRange] = useState(50)
    const [things, setThings] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`
     First Name: ${firstName} \n
     Last Name: ${lastName} \n
     Email: ${email} \n
     Country/Region: ${countryRegion} \n
     Options: ${options} \n
     Things: ${things} \n
     Range: ${range} \n
    `)
    }
    const handleThings = (e) => {
        let arr = things
        arr.push(e.target.value)
        let unique = [...new Set(arr)]
        setThings(unique)
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <RuxInput
                        label="First Name"
                        value={firstName}
                        onRux-input={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Last Name"
                        value={lastName}
                        onRux-input={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Email"
                        value={email}
                        onRux-input={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <RuxSelect
                        label="Country/Region"
                        onRux-change={(e) => setCountryRegion(e.target.value)}
                    >
                        <option value="Canada">Canada</option>
                        <option value="United States">United States</option>
                    </RuxSelect>
                </div>
                <div>
                    <RuxCheckboxGroup label="Things">
                        <RuxCheckbox
                            value="comments"
                            onRux-change={(e) => handleThings(e)}
                        >
                            Comments
                        </RuxCheckbox>
                        <RuxCheckbox
                            value="offers"
                            onRux-change={(e) => handleThings(e)}
                        >
                            Offers
                        </RuxCheckbox>
                        <RuxCheckbox
                            value="events"
                            onRux-change={(e) => handleThings(e)}
                        >
                            Events
                        </RuxCheckbox>
                    </RuxCheckboxGroup>
                </div>
                <div>
                    <RuxRadioGroup
                        label="Options"
                        onRux-change={(e) => setOptions(e.target.value)}
                    >
                        <RuxRadio label="Everything" value="everything" />
                        <RuxRadio label="Same" value="same" />
                        <RuxRadio label="None" value="none" />
                    </RuxRadioGroup>
                </div>
                <div>
                    <RuxSlider
                        label="A Range"
                        value={range}
                        onRux-input={(e) => setRange(e.target.value)}
                    />
                </div>
                <div>
                    <RuxButton type="submit" size="large">
                        Submit
                    </RuxButton>
                </div>
            </form>
        </div>
    )
}
