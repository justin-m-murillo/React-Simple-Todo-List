class FormValidation {

    static validateSubmission = (task) => {
        let alerts = [];

        if (task.memo.length < 3) {
            alerts.push(
                "Please enter a valid title (more than 2 characters)."
            );
        }

        if (task.title.length < 3) {
            alerts.push(
                "Please enter a valid memo (more than 2 characters)."
            )
        }

        return alerts;
    }

}
 
export default FormValidation;