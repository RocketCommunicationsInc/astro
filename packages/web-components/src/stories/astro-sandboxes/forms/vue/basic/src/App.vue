<template>
    <div style="width: 60%; margin: auto">
        <form style="padding: 1rem" @submit.prevent="submit()">
            <div>
                <rux-input
                    :value="form.firstName"
                    @ruxinput="form.firstName = $event.target.value"
                    label="First Name"
                ></rux-input>
            </div>

            <div>
                <rux-input
                    :value="form.lastName"
                    @ruxinput="form.lastName = $event.target.value"
                    label="Last Name"
                ></rux-input>
            </div>

            <div>
                <rux-input
                    :value="form.email"
                    @ruxinput="form.email = $event.target.value"
                    type="email"
                    label="Email"
                ></rux-input>
            </div>

            <div>
                <rux-select
                    label="Country / Region"
                    :value="form.country"
                    @ruxchange="form.country = $event.target.value"
                >
                    <rux-option value="USA" label="United States"></rux-option>
                    <rux-option value="Canada" label="Canada"></rux-option>
                </rux-select>
            </div>

            <div>
                <rux-checkbox-group label="Things">
                    <rux-checkbox
                        value="comments"
                        :checked="form.things.includes('comments')"
                        @ruxchange="
                            updateThings('comments', $event.target.checked)
                        "
                    >
                        Comments
                    </rux-checkbox>
                    <rux-checkbox
                        value="offers"
                        :checked="form.things.includes('offers')"
                        @ruxchange="
                            updateThings('offers', $event.target.checked)
                        "
                    >
                        Offers
                    </rux-checkbox>
                    <rux-checkbox
                        value="events"
                        :checked="form.things.includes('events')"
                        @ruxchange="
                            updateThings('events', $event.target.checked)
                        "
                    >
                        Events
                    </rux-checkbox>
                </rux-checkbox-group>
            </div>

            <div>
                <rux-radio-group
                    :value="form.options"
                    @ruxchange="form.options = $event.target.value"
                    label="Options"
                >
                    <rux-radio
                        value="everything"
                        :checked="form.options === 'everything'"
                    >
                        Everything
                    </rux-radio>
                    <rux-radio value="same" :checked="form.options === 'same'">
                        Same
                    </rux-radio>
                    <rux-radio value="none" :checked="form.options === 'none'">
                        None
                    </rux-radio>
                </rux-radio-group>
            </div>

            <div>
                <rux-slider
                    :value="form.range"
                    @ruxinput="form.range = $event.target.value"
                    label="A Range"
                >
                </rux-slider>
            </div>

            <div class="col-span-6 ml-auto">
                <rux-button :disabled="loading" type="submit"
                    >Submit</rux-button
                >
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            loading: false,
            form: {
                firstName: '',
                lastName: '',
                email: '',
                country: 'USA',
                options: 'none',
                things: [],
                range: '',
            },
        }
    },
    methods: {
        submit() {
            this.loading = true

            // Mock HTTP request
            setTimeout(() => {
                this.loading = false
                alert(JSON.stringify(this.form))
            }, 100)
        },
        /**
         * Manually handle checkbox form binding
         */
        updateThings(value, checked) {
            if (checked) {
                this.form.things = this.form.things.concat(value)
            } else {
                console.log('not checked')

                this.form.things = this.form.things.filter(
                    (item) => item !== value
                )
            }
        },
    },
}
</script>

<style scoped>
form > div {
    margin-bottom: 1rem;
}
</style>
