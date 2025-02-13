<script setup>
    import emailjs from 'emailjs-com';
    import { ref, computed } from 'vue'

    let lastname = ref("")
    let firstname = ref("")
    let subject = ref("")
    let message = ref("")

    const isValidMail = computed(() => {
        return lastname.value == '' ||
            firstname.value == '' ||
            subject.value == '' ||
            message.value == '';
    })

    function sendEmail() {
        emailjs.send(
            'service_vro5cfi', // Remplace avec ton ID de service
            'template_1recsej', // Remplace avec l'ID de ton template
            {
                from_name: `${lastname.value.toUpperCase()} ${firstname.name}`,
                subject: `${subject.value}`,
                message: `${message.value}`,
            },
            'lPy5V1yu6yESRBo_H' // Remplace avec ton User ID EmailJS
        ).then(
            (response) => {
                console.log('Email envoyé avec succès !', response);
            },
            (error) => {
                console.error('Erreur lors de l\'envoi de l\'email :', error);
            }
        );
    };
</script>

<template>
    <main>
        <form class="d-flex flex-column gap-3 m-3">
            <div class="d-flex gap-3">
                <div class="flex-grow-1 form-floating">
                    <input type="text" class="form-control" :class="lastname == `` ? `is-invalid` : `is-valid`" id="inputLastname" placeholder="Doe" v-model="lastname">
                    <label for="inputLastname">Nom</label>
                    <div class="invalid-feedback">
                        Veuillez renseigner un nom
                    </div>
                </div>
                <div class="flex-grow-1 form-floating">
                    <input type="text" class="form-control" :class="firstname == `` ? `is-invalid` : `is-valid`" id="inputFirstname" placeholder="John" v-model="firstname">
                    <label for="inputFirstname">Prénom</label>
                    <div class="invalid-feedback">
                        Veuillez renseigner un prénom
                    </div>
                </div>
            </div>
            <div class="form-floating">
                <input type="text" class="form-control" :class="subject == `` ? `is-invalid` : `is-valid`" id="inputSubject" placeholder="Subject" v-model="subject">
                <label for="inputSubject">Sujet</label>
                <div class="invalid-feedback">
                    Veuillez renseigner un sujet
                </div>
            </div>
            <div class="form-floating">
                <textarea class="form-control" placeholder="Message" id="inputMessage" :class="message == `` ? `is-invalid` : `is-valid`" v-model="message"></textarea>
                <label for="inputMessage">Message</label>
                <div class="invalid-feedback">
                    Veuillez renseigner un message
                </div>
            </div>
            <button type="button" @click="sendEmail" class="btn btn-primary" :disabled="isValidMail">Envoyer</button>
        </form>
    </main>
</template>