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
    RuxOption,
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
        if (e.target.checked) {
            arr.push(e.target.value)
            let unique = [...new Set(arr)]
            setThings(unique)
        } else {
            setThings(arr.filter((item) => item !== e.target.value))
        }
    }
    return (
        <div className="container">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <RuxInput
                        label="First Name"
                        value={firstName}
                        onRuxinput={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Last Name"
                        value={lastName}
                        onRuxinput={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div>
                    <RuxInput
                        label="Email"
                        value={email}
                        onRuxinput={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <RuxSelect
                        label="Country/Region"
                        onRuxchange={(e) => setCountryRegion(e.target.value)}
                    >
                        <RuxOption value="Canada" label="Canada"></RuxOption>
                        <RuxOption
                            value="United States"
                            label="United States"
                        ></RuxOption>
                    </RuxSelect>
                </div>
                <div>
                    <RuxCheckboxGroup label="Things">
                        <RuxCheckbox
                            value="comments"
                            onRuxchange={(e) => handleThings(e)}
                        >
                            Comments
                        </RuxCheckbox>
                        <RuxCheckbox
                            value="offers"
                            onRuxchange={(e) => handleThings(e)}
                        >
                            Offers
                        </RuxCheckbox>
                        <RuxCheckbox
                            value="events"
                            onRuxchange={(e) => handleThings(e)}
                        >
                            Events
                        </RuxCheckbox>
                    </RuxCheckboxGroup>
                </div>
                <div>
                    <RuxRadioGroup
                        label="Options"
                        onRuxchange={(e) => setOptions(e.target.value)}
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
                        onRuxinput={(e) => setRange(e.target.value)}
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
