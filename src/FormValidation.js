class FormValidation {

    static validateSubmission = (task) => {
        let alerts = [];

        if (!this.validateTitle(task.title)) {
            alerts.push(
                "Please enter a valid title ( > 2 characters)."
            );
        }

        if (!this.validateMemo(task.memo)) {
            alerts.push(
                "Please enter a valid memo ( > 2 characters)."
            )
        }

        return alerts;
    }

    static validateMemo = (memo) => {
        if (memo.length < 3) return false;
        return true;
    }

    static validateTitle = (title) => {
        if (title.length < 3) return false;
        return true;
    }

}
 
export default FormValidation;