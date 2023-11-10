AOS.init()

// MORE DETAILS
const moreDetails = document.querySelector('.moreDetails')
const moreDetailsToggle = document.querySelector('.moreDetails__toggle')
const moreDetailsToggleText = document.querySelector(
  '.moreDetails__toggle p span'
)

const toggleDetatails = () => {
  if (moreDetails.classList.contains('display-none')) {
    moreDetailsToggleText.innerHTML = 'View Less'
    moreDetails.classList.remove('display-none')
    moreDetails.classList.add('display-block')
  } else {
    moreDetailsToggleText.innerHTML = 'View More'
    moreDetails.classList.remove('display-block')
    moreDetails.classList.add('display-none')
  }
}

moreDetailsToggle.addEventListener('click', toggleDetatails)
