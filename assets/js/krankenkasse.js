class Krankenkasse {

    constructor(name, refund) {
        this.name = name;
        this.refund = refund;
    }

    getRefund = (price) => {
        const refund = {
            "price": price,
            "refund_percentage": this.refund,
            "payment": price - price * this.refund,
            "refund": price * this.refund
        }
        return refund;
    }
}
