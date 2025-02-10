const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Sample video data
const videos = [
    //  https://drive.google.com/file/d/1LPruVXQZcowDKgbdD9vZ2NefFVPZB9d9/view?usp=sharing, https://drive.google.com/file/d/1NUoohULcU38ZlX5JEF3Z3Bh4DrsOnVO7/view?usp=sharing, https://drive.google.com/file/d/1ZsXgOH15cvsXPfjYMO67KemuQyfIo23h/view?usp=sharing, https://drive.google.com/file/d/1ZuOa2eeQNTLVcrS2JK2jLLJzDX4Mqduv/view?usp=sharing, https://drive.google.com/file/d/1_BSzwXbPmoCQ0FKdy5ozBea_Y8b2P_iI/view?usp=sharing, https://drive.google.com/file/d/1_Hcxgw6L_ubPN0EXadj1O1UisKRsP78C/view?usp=sharing, https://drive.google.com/file/d/1afTU9mjVSlYzVm4aG4mYNzXeGrJ2FAdJ/view?usp=sharing, https://drive.google.com/file/d/1gmWNOHB14Nx6xjQti4o6YDAiXAtZPf3H/view?usp=sharing, https://drive.google.com/file/d/1vYtvOlK9wXLZQBpmvl4TS9w9a3-Z2Fza/view?usp=sharing
    { id: 1, title: 'Video 1', url: 'https://media-hosting.imagekit.io//b2cf2d0f1de54ee3/1%20(1).mp4?Expires=1833798916&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=vJfaZbb84sCYNw6Nruph~M-2rLW1~PiI~yPuE~8Ny0t4eex2yW53lPoAeBqcT2jygr-4T5KQ0U~HuGmEKp2GqLQdLjiuIeBG~xhqheXAhzbEG7zua-fMumMKEQo2zvOscInd9~SncTpTSFh6ag7ej-7veM8lxALyJh6b1di1JEaePkdrqe0dVBGVx5wYNrMt6ZCAWSUcprq~8PfzzeJ6LZfu4Pl737K7i7rx~-F4ae86Tui7mFLGzqACeemcrjCEzgXCsIxYGjgW9x6vyfB9TiaKVm5xVFaCiiVmbBk510KHLWAXkx9M6LSszF6nyorHdfXVoNNwqqcf5h3Q2L2G2Q__' },
    { id: 2, title: 'Video 2', url: 'https://media-hosting.imagekit.io//50d0ded47b68415e/1%20(9).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=SB5InzvQQoPBnfL1W24ObZh~KVdUmSQXdDx49FWoZFlNM0NqvMmS1Ck8Me9eJ96D07r6MC6Bx6GhubK7H5oD6I2RyvwgX0jHtSjneNiRieVNF3gJ7HwJkOfs0inDjTTEgdLLO7tyGg1g6v~gSr~PYY4-ZSqVCbNscxxdkEI40W-mQktpKLPvsC47rh4awy6tBPxbehv6YZD7cmIL3Pp7uJ8NjvukhfXAqGB~t492wwrZzl4-0PDJwPIV~JWvPRbLdM760fxH~2Gr4FEhjTayXsgepg42GFXLys9vuQJSluwjISvlhadEycy94o1spcz7zu37dXk5UJfxAN-0HHgnDA__' },
    { id: 3, title: 'Video 3', url: 'https://media-hosting.imagekit.io//ee785eec5dfe4934/1%20(8).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=MsRYmGTYRdtW4jFNQcAPz16smwsdUda51-lo-0erlvvFCNcKau3-htAJ7AVuiEprNfrCWiCG8ROB1crkVNE1l2VV4c0qXCHJLG~oCTHNOd6crpNJRBNMwM5Cugq4H~0wyDyo7eXiScbWwiNWck76QwDngEfkASlnoShgWKxQqDDNSJCGUQLuB1bQp8TNI67ybFN3nKz2bmeO5oV1aE71VHmRxbzKppBn~daq0tITNdQnUzJaD1SFY65Ujy4rUq27wTNXUGxyKi2Hffkjkp5iPCna6r9I1JYQI6HsUqekcRk9iZo0vRJT7pxytwaxRlgtFiWsGLqHTMfw0wjT1~FBAw__' },
    { id: 4, title: 'Video 4', url: 'https://media-hosting.imagekit.io//6be9b798694b4f65/1%20(7).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eKpHyIn3tFoPTq1DlPQOJb0aTya-z9ywHRrG5jRhAs78qXwlTNxbSUz8JkAZWXKBJU0Wo-d9erdps9I1igmKyVw9vRm5cr1GRZak40kCkM1UroFxfFon7W65auKKkKz4ZW80pdLPc78bpZfC2C5xcGhnTgSCeagFdAHsqoPpomewS7t3TGbEgPr3cF0e9-o074qAyBIgizk-V7xYc81mRwj1MdZgxfi61YL8Sam9~pNKUPB2gRpW6knzyKsrp5eqxeXx2IU24InMXWRWPx3Q-kO96sog5JGeLXXRO~eDnfcNGFOaKEerY8LbASKt~mBcw~YBpyRoiZN7U0ndjS-o0A__' },
    { id: 5, title: 'Video 5', url: 'https://media-hosting.imagekit.io//083233b434374e8c/1%20(6).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=erxlitdoMcJyvOXEx9aNW7gBFftEv67OO3vfai4x4KMM4SZaZ6HtxXyH8hBj~PcyesY2Pqhi6mn3OXhUvn691bKdd8KZqJfE-D8Ncce2FMKgquCWcJRATgZYOCJ52oHeaWZvsYLOkyGUxDhSuSyQHqzY3sO8mPoleE1F64DUbpIbtN-4~BiWWye6wOcGBDEhclLf9aMn-AFP1KSv77X~SAr108IxTi-9Kf17orET31oqcN3Vk~k7Ltl7JuePQWuHqZr-MR9SLTBJMy3iVZ-uc-oad9AcLJ02FB7QOcG4FBhINJvOML7Tbuqg9gt6c~qi37zyZZqzlxPQo5SbsQkCWw__' },
    { id: 6, title: 'Video 6', url: 'https://media-hosting.imagekit.io//9383bd858398497b/1%20(5).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=fw7UQTITyog9eEfdXloowM8lnwhEkpyaYWNVKrvtS-TDF7YQ2xUPcM3xoE-T-P9WqSD~Cgwzu4aJcIZZGCsqXP63uifqF4KvqhmmkCbaQ~~oVHIbqeCAuEg6i2nO93~T2JkFjmzqSPd1rrURPBpFJnbdGuOlhwKqIu8hgv0OXnfdHgR~I1mHLhS-g4fO8Mj5zpJzxcpp9aLn5SK78WAT~ZLyXwpfy2pRe95x46x03htzst4qPcMzfDZAcDUaESzG4A1T7ePO3bZC2Hhl5SOWziU5ICoT5avgvBUOKM223tXQ4~sRwhMUoVW5iTBng2ZveM05rsL4K9014f~qtZZfPw__' },
    { id: 7, title: 'Video 7', url: 'https://media-hosting.imagekit.io//c8fcb7b04edd4d2e/1%20(4).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=YshEleofkGKWPmyEuPEv7b5~yVYyKSd72dBDEqv5~bXmbTnTJNXLA9lKNw8n9mrKEFIW92phhLCD--bJP4H4PkROi-Qqlin2gpu7r6C1xyT0fHXYnXY0NNbEQ3GIQURGrSe47CaGhVoKoRpAQfUQFhhN6iOBYJ0Z4LcsbMmITFO~7dnj8X8Q5xVFzfv2bNBx9-dbX38FmqphSzBwgsTdi4fsMQr~iwHqfnGUoimNjdQmtxk08l3Vm1VHfsoympT63~kzrvvoUez1Z8eRivdtMJU5BtriaDAml2ww7sxnqcc5XgsdjhuGNSR40B373weBG38GZ2mYG6IoGWIpJHOg4A__' },
    { id: 8, title: 'Video 8', url: 'https://media-hosting.imagekit.io//228c5144c127430b/1%20(3).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WSjQe0oB0uyi2MG2VH7YQ0HyWhrayLgQotKV2a5ZjvQF1g1vNd-mCIwsUXko7F69W1RzevFTDTTQOB7kdW2a11n7ZC9A7jPlbmDGbRgkwlo9N0MSS96kpPomFj3V4waWKyc4EBMFUy4qELoOmShc7piZU8y0wrJL-DeGt~q~mLiDOVYMbcpB0~zt22GCocSjw6-0etNxKMzIVfrOU75RrucmtzdMu6oLq0cvLerXgRJ8wowR3yG1KuFB6EjsUwsofRCXQSEsHBrMYCfFmh8fz9owXrpjrF7Brt65Xd1Oj~5Ftl9FfnStQBI~tDa9kX995Z3CVS2P9J2t1ajqoOholg__' },
    { id: 9, title: 'Video 9', url: 'https://media-hosting.imagekit.io//228c5144c127430b/1%20(3).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=WSjQe0oB0uyi2MG2VH7YQ0HyWhrayLgQotKV2a5ZjvQF1g1vNd-mCIwsUXko7F69W1RzevFTDTTQOB7kdW2a11n7ZC9A7jPlbmDGbRgkwlo9N0MSS96kpPomFj3V4waWKyc4EBMFUy4qELoOmShc7piZU8y0wrJL-DeGt~q~mLiDOVYMbcpB0~zt22GCocSjw6-0etNxKMzIVfrOU75RrucmtzdMu6oLq0cvLerXgRJ8wowR3yG1KuFB6EjsUwsofRCXQSEsHBrMYCfFmh8fz9owXrpjrF7Brt65Xd1Oj~5Ftl9FfnStQBI~tDa9kX995Z3CVS2P9J2t1ajqoOholg__' },
    { id: 10, title: 'Video 10', url: 'https://media-hosting.imagekit.io//9afe153cec0b4b42/1%20(2).mp4?Expires=1833799201&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=B8bPmeGaHMd32KzDwk65vh7csq9Y0xIiaTxJTlwwDetTH6f1Qz9TCcptxh6sHMCZgxsXPKlez0SYabmsfghVFpsU7B3Ks6cFrn2gH-nmEAuA6YOXdcs4I627Kt4CDb7BFA5A0C3hstfL7gwD8g8fFZE~kQUaocKZJWCdnU57Shn8~WvuELgYgeUpLoeYthfwlh4QSbIMjL9IoAOdSdBpQvyYzjdZHNfyRgtENZ0IXmE-vM29ApiMPAR1k5-lyDapklJg-ZL3CFLpq2n-s8dL6wcYug5A-U-CxpJ595ACzwy95XshgqwJAYhCbAw6fnJmEVnYOneHYgWDfnR9UB42tg__' },
    // Add more videos as needed
];

// Endpoint to get 10 random videos
app.get('/api/random-videos', (req, res) => {
    const shuffled = videos.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 10);
    res.json(selected);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});