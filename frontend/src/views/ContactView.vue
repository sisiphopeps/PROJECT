<template lang="">
    <div class="row">
    <div class="col-md-6" style="font-weight:bold">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
        <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
      </svg>:sisiphopepengweni@gmail.com<br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
      </svg>:10338 Ntabesinayi str<br>Lower Crossroads<br>Philippi East <br> 7785<br>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
      </svg>:+27 635 375 458
    </div>
    <div class="col-md-6">
      <form
      action="https://formspree.io/f/mqkvbeop" 
      method="POST"
    >
    <label for="name">Full name:</label><br>
    <input type="text" class="input-field" placeholder="Please enter your Name" required="name"  oninvalid="this.setCustomValidity('Please Enter Your Name')"
    oninput="this.setCustomValidity('')"><br>
    <label for="email">Email:</label><br>
    <input type="email" name="email" class="input-field" placeholder="Enter your email address"  required="email" oninvalid="this.setCustomValidity('Please Enter Your Email')"
    oninput="this.setCustomValidity('')"><br>
    <label>Message:</label><br>
    <textarea name="message" class="textarea-field" placeholder="Please type your message" required="message"   oninvalid="this.setCustomValidity('Please Enter Your Message')"
    oninput="this.setCustomValidity('')"></textarea><br>
    <!-- your other form fields go here -->
    <button type="submit" class="submit-button">Send</button>
    </form>
    </div> 
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.form {
    background-color: #191825;
    padding: 20px;
  }
  .container{
    width: 40%;
    margin:auto;
    border-radius: 8px;
    border:1px solid grey;
    box-shadow: 4px 8px 0px grey;
  }
  .input-field,
  .textarea-field {
    width: 40%;
    padding: 15px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    background-color: #D9D9D9;
  }
  .submit-button {
    background-color: #D9D9D9;
    color: black;
    border: none;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
  }
  .submit-button:hover {
    background-color:pink;
  }
  label {
    font-weight: bold;
  }

  .row {
    padding: 50px;
  }
  
</style>