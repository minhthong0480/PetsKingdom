export const showMessage = (res, req) => {
    res.status(200).send(`Here is your message: ${req.params.message}`)
};