export const faqData = [
  {
    question: "Who is the Bishop?",
    answer: "Our Bishop is Rt Revd Cornelius Oluwadare Adagbada. Bishop's wife: Mrs. Esther Olusola Adagbada."
  },
  {
    question: "Who is the Vicar?",
    answer: "Our Vicar is Revd Jeremiah Ayodeji Folarin. Vicar's wife: Mrs. Victoria Toluwaloju Folarin."
  },
  {
    question: "What time is worship?",
    answer: "Worship service holds every Sunday from 9:00 AM to 12:00 Noon."
  },
  {
    question: "How many church members are there?",
    answer: "Our church numerical strength is 120 members."
  },
  {
    question: "How many choirs do we have?",
    answer: "We have 35 choirs in St. John's Anglican Church Odobi."
  },
  {
    question: "Which Diocese are we under?",
    answer: "We are under Ekiti West Diocese, Okemesi Archdeaconry, Church of Nigeria Anglican Communion."
  },
  {
    question: "When was the church founded?",
    answer: "St. John's Anglican Church Odobi was founded in 1982."
  }
];

// Creates the quick question buttons in chatbot
export const PRESET_QUESTIONS = faqData.map(item => item.question);

export default faqData;
