import { Card } from "./components/Card.js";

const game = Vue.createApp({
    template: `
        <div class="card-wrapper">
            <card v-for="(el) in cardData" :name="el.rank" :symbol="el.suit"></card>
        </div>
        <button @click="mix">Mix</button>
    `,
    components: {
        card: Card
    },
    data() {
        return {
            cardData: [
                {rank: 'A', suit: '♥'},
                {rank: '2', suit: '♦'},
                {rank: '3', suit: '♠'},
                {rank: '4', suit: '♣'},
                {rank: '5', suit: '♣'},
                {rank: '6', suit: '♠'},
                {rank: '7', suit: '♦'},
                {rank: '8', suit: '♥'},
                {rank: '9', suit: '♥'},
                {rank: '10', suit: '♦'},
                {rank: 'J', suit: '♠'},
                {rank: 'Q', suit: '♣'},
                {rank: 'K', suit: '♣'}
            ]
        }
    },
    methods: {
        mix() {
            this.cardData.sort(() => (Math.random() > .5) ? 1 : -1);
        }
    },
}).mount("#game");