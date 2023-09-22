const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  showCurrentStep();
}
multiStepForm.addEventListener("submit", (e) => {
  if (e.target.matches("[data-submit]")) {
    if (isValid === true) {
      //Submit form
      location.replace("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
      return;
    }
  }
});

multiStepForm.addEventListener("click", (e) => {
  let incrementor;
  if (e.target.matches("[data-next]")) {
    incrementor = 1;
  } else if (e.target.matches("[data-previous]")) {
    incrementor = -1;
  }

  if (incrementor == null || incrementor == 0) return;

  //================
  // currentStep += incrementor;
  // showCurrentStep();

  // Get all form elements
  //Stage - 0
  const firstname = document.getElementById("firstname").value.trim();
  const lastname = document.getElementById("lastname").value.trim();
  const date_of_birth = document.getElementById("date_of_birth").value.trim();
  const loan_reason = document.getElementById("loan_reason").value.trim();

  const valStage0 = {
    firstname,
    lastname,
    date_of_birth,
    loan_reason,
  };

  //Stage - 1
  const address1 = document.getElementById("address1").value.trim();
  const address2 = document.getElementById("address2").value.trim();
  const flat_number = document.getElementById("flat_number").value.trim();
  const zip_code = document.getElementById("zip_code").value.trim();
  const city = document.getElementById("city").value.trim();
  const state = document.getElementById("state").value.trim();

  const valStage1 = {
    address1,
    address2,
    flat_number,
    zip_code,
    city,
    state,
  };

  //Stage - 2
  const email = document.getElementById("email").value.trim();
  const phone_no = document.getElementById("phone_no").value.trim();

  const valStage2 = {
    email,
    phone_no,
  };

  //Stage - 3
  const length_at_address = document
    .getElementById("length_at_address")
    .value.trim();
  const residency_status = document
    .getElementById("residency_status")
    .value.trim();
  const owns_home = document.getElementById("owns_home").value.trim();

  const valStage3 = {
    length_at_address,
    residency_status,
    owns_home,
  };

  //Stage - 4
  const income_source = document.getElementById("income_source").value;
  const time_employed = document.getElementById("time_employed").value.trim();
  const pay_frequency = document.getElementById("pay_frequency").value.trim();
  const military_service = document
    .getElementById("military_service")
    .value.trim();

  const valStage4 = {
    income_source,
    time_employed,
    pay_frequency,
    military_service,
  };

  //Stage - 5
  const monthly_income = document.getElementById("monthly_income").value.trim();
  const income_payment_type = document
    .getElementById("income_payment_type")
    .value.trim();
  const next_payday = document.getElementById("next_payday").value.trim();

  const valStage5 = {
    monthly_income,
    income_payment_type,
    next_payday,
  };

  //Stage - 6
  const employer_name = document.getElementById("employer_name").value.trim();
  const employer_phone = document.getElementById("employer_phone").value.trim();
  const job_title = document.getElementById("job_title").value.trim();

  const valStage6 = {
    employer_name,
    employer_phone,
    job_title,
  };

  //Stage - 7
  const bank_account_type = document
    .getElementById("bank_account_type")
    .value.trim();
  const ssn = document.getElementById("ssn").value.trim();

  const valStage7 = {
    bank_account_type,
    ssn,
  };

  //Stage - 8
  const license = document.getElementById("license").value.trim();
  const issuing_state = document.getElementById("issuing_state").value.trim();
  const bank_paid_with = document.getElementById("bank_paid_with").value.trim();
  const month_at_bank = document.getElementById("month_at_bank").value.trim();

  const valStage8 = {
    license,
    issuing_state,
    bank_paid_with,
    month_at_bank,
  };

  //Stage - 9
  const credit_score = document.getElementById("credit_score").value.trim();
  const unsecured_debt = document.getElementById("unsecured_debt").value.trim();
  const own_car_paid_off = document
    .getElementById("own_car_paid_off")
    .value.trim();

  const valStage9 = {
    credit_score,
    unsecured_debt,
    own_car_paid_off,
  };

  //Stage - 10
  const additional_lenders = document
    .getElementById("additional_lenders")
    .value.trim();
  const credit_offers = document.getElementById("credit_offers").value.trim();
  const required_authorization = document
    .getElementById("required_authorization")
    .value.trim();

  const valStage10 = {
    additional_lenders,
    credit_offers,
    required_authorization,
  };

  //Stage - 11
  const routing_number = document.getElementById("routing_number").value.trim();
  const name_of_bank = document.getElementById("name_of_bank").value.trim();
  const account_number = document.getElementById("account_number").value.trim();

  const valStage11 = {
    routing_number,
    name_of_bank,
    account_number,
  };

  //--- Switch ---
  let isValid;
  switch (currentStep) {
    case 0:
      isValid = validate(valStage0);
      break;
    case 1:
      isValid = validate(valStage1);
      break;
    case 2:
      isValid = validate(valStage2);
      break;
    case 3:
      isValid = validate(valStage3);
      break;
    case 4:
      isValid = validate(valStage4);
      break;
    case 5:
      isValid = validate(valStage5);
      break;
    case 6:
      isValid = validate(valStage6);
      break;
    case 7:
      isValid = validate(valStage7);
      break;
    case 8:
      isValid = validate(valStage8);
      break;
    case 9:
      isValid = validate(valStage9);
      break;
    case 10:
      isValid = validate(valStage10);
      break;
    case 11:
      isValid = validate(valStage11);
      // if (isValid === true) {
      //   //Submit form
      //   location.replace("/success?suc=1axaW68594wxfGfrP_8sudjejhb8934hsdnsm");
      //   return;
      // }
      break;
    default:
      isValid = false;
  }

  if (isValid === true || incrementor == -1) {
    currentStep += incrementor;
    showCurrentStep();
  }
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

const validate = (values) => {
  const errors = {};
  let error;
  let validity = true;

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  switch (currentStep) {
    //=====================================
    case 0:
      error = document.getElementById("fn_err");
      if (!values.firstname) {
        errors.firstname = "First name is required !";
        error.textContent = errors.firstname;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("ln_err");
      if (!values.lastname) {
        errors.lastname = "Last name is required !";
        error.textContent = errors.lastname;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("dob_err");
      if (!values.date_of_birth) {
        errors.date_of_birth = "Missing date of birth !";
        error.textContent = errors.date_of_birth;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("loan_err");
      if (!values.loan_reason || values.loan_reason == 0) {
        errors.loan_reason = "Specify the reason for the loan request !";
        error.textContent = errors.loan_reason;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 1:
      error = document.getElementById("ad1_err");
      if (!values.address1) {
        errors.address1 = "The address cannot be empty !";
        error.textContent = errors.address1;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("flat_err");
      if (!values.flat_number) {
        errors.flat_number = "Specify the flat/house number";
        error.textContent = errors.flat_number;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("zip_err");
      if (!values.zip_code) {
        errors.zip_code = "Provide the Zip code please !";
        error.textContent = errors.zip_code;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("city_err");
      if (!values.city) {
        errors.city = "Specify the city of residence !";
        error.textContent = errors.city;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("state_err");
      if (!values.state) {
        errors.state = "Specify the state of residence !";
        error.textContent = errors.state;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 2:
      error = document.getElementById("email_err");
      if (!values.email) {
        errors.email = "E-mail is required !";
        error.textContent = errors.email;
        validity = false;
      } else if (!regex.test(values.email)) {
        errors.email = "This is not a valid e-mail !";
        error.textContent = errors.email;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("phone_no_err");
      if (!values.phone_no) {
        errors.phone_no = "Provide a contact phone number!";
        error.textContent = errors.phone_no;
        validity = false;
      } else if (values.phone_no.length < 10) {
        errors.phone_no = "Phone number is invalid !";
        error.textContent = errors.phone_no;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 3:
      error = document.getElementById("length_at_address_err");
      if (!values.length_at_address) {
        errors.length_at_address = "Specify length at address !";
        error.textContent = errors.length_at_address;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("residency_status_err");
      if (!values.residency_status) {
        errors.residency_status = "Specify residency status !";
        error.textContent = errors.residency_status;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("owns_home_err");
      if (!values.owns_home) {
        errors.owns_home = "Select an option please !";
        error.textContent = errors.owns_home;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 4:
      error = document.getElementById("income_source_err");
      if (!values.income_source) {
        errors.income_source = "Indicate source of income !";
        error.textContent = errors.income_source;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("time_employed_err");
      if (!values.time_employed || values.time_employed <= 0) {
        errors.time_employed = "Specify length of employment !";
        error.textContent = errors.time_employed;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("pay_frequency_err");
      if (!values.pay_frequency) {
        errors.pay_frequency = "Pay frequency is missing !";
        error.textContent = errors.pay_frequency;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("military_service_err");
      if (!values.military_service) {
        errors.military_service = "Specify military service !";
        error.textContent = errors.military_service;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 5:
      error = document.getElementById("monthly_income_err");
      if (!values.monthly_income || values.monthly_income <= 0) {
        errors.monthly_income = "Provide monthly income value !";
        error.textContent = errors.monthly_income;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("income_payment_type_err");
      if (!values.income_payment_type) {
        errors.income_payment_type = "Specify payment type !";
        error.textContent = errors.income_payment_type;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("next_payday_err");
      if (!values.next_payday) {
        errors.next_payday = "Next pay date is missing !";
        error.textContent = errors.next_payday;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================

    case 6:
      error = document.getElementById("employer_name_err");
      if (!values.employer_name) {
        errors.employer_name = "Provide the employer's name !";
        error.textContent = errors.employer_name;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("employer_phone_err");
      if (!values.employer_phone) {
        errors.employer_phone = "Provide the employer's phone number !";
        error.textContent = errors.employer_phone;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("job_title_err");
      if (!values.job_title) {
        errors.job_title = "Please state the job title !";
        error.textContent = errors.job_title;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 7:
      error = document.getElementById("bank_account_type_err");
      // if (!values.bank_account_type) {
      if (values.bank_account_type == 0) {
        errors.bank_account_type = "Specify account type !";
        error.textContent = errors.bank_account_type;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("ssn_err");
      if (!values.ssn) {
        errors.ssn = "Missing social security number !";
        error.textContent = errors.ssn;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 8:
      error = document.getElementById("license_err");
      if (!values.license) {
        errors.license = "Provide your license number !";
        error.textContent = errors.license;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("issuing_state_err");
      if (!values.issuing_state) {
        errors.issuing_state = "What state was the license issued ?";
        error.textContent = errors.issuing_state;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("bank_paid_with_err");
      if (!values.bank_paid_with) {
        errors.bank_paid_with = "Specify payment type !";
        error.textContent = errors.bank_paid_with;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("month_at_bank_err");
      if (!values.month_at_bank || values.month_at_bank < 0) {
        errors.month_at_bank = "How long have you engaged the bank ?";
        error.textContent = errors.month_at_bank;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 9:
      error = document.getElementById("credit_score_err");
      if (!values.credit_score) {
        errors.credit_score = "Select credit score range !";
        error.textContent = errors.credit_score;
        validity = false;
      } else error.textContent = "";

      // error = document.getElementById("unsecured_debt_err");
      // if (!values.unsecured_debt) {
      // errors.unsecured_debt = "Enter unecured debt value !";
      // error.textContent = errors.unsecured_debt;
      // validity = false;
      // } else error.textContent = "";

      error = document.getElementById("own_car_paid_off_err");
      if (values.own_car_paid_off == 0) {
        errors.own_car_paid_off = "Choose one of the options !";
        error.textContent = errors.own_car_paid_off;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 10:
      error = document.getElementById("additional_lenders_err");
      if (!additional_lenders.checked) {
        errors.additional_lenders =
          "Please check the 'additional lenders' option !";
        error.textContent = errors.additional_lenders;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("credit_offers_err");
      if (!credit_offers.checked) {
        errors.credit_offers = "Please check the 'credit offers' option !";
        error.textContent = errors.credit_offers;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("required_authorization_err");
      if (!required_authorization.checked) {
        errors.required_authorization =
          "Please check the 'required authorization' option !";
        error.textContent = errors.required_authorization;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
    case 11:
      error = document.getElementById("routing_number_err");
      if (!values.routing_number) {
        errors.routing_number = "Provide a valid routing number !";
        error.textContent = errors.routing_number;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("name_of_bank_err");
      if (!values.name_of_bank) {
        errors.name_of_bank = "Specify the name of the bank !";
        error.textContent = errors.name_of_bank;
        validity = false;
      } else error.textContent = "";

      error = document.getElementById("account_number_err");
      if (!values.account_number) {
        errors.account_number = "Provide a valid account number !";
        error.textContent = errors.account_number;
        validity = false;
      } else error.textContent = "";

      break;
    //=====================================
  }

  // return errors;
  return validity;
};
