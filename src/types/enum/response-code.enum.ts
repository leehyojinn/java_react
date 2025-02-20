enum ResponseCode {
// http status 200
SUCCESS = "SU",

// http status 400
VAILDATION_FAILED = "VF",
DUPLICATE_EMAIL = "DE",
DUPLICATE_NICKNAME = "DN",
DUPLICATE_TEL_NUMBER = "DT",
NOT_EXISTED_USER = "NU",
NOT_EXISTED_BOARD = "NB",

// http status 401
SIGN_IN_FAIL = "SF",
AUTHORIZATION_FAIL = "AF",

// http status 403
NO_PERMISSION = "NP",

// http ststus 500
DATABASE_ERROR = "DE",

}

export default ResponseCode;