function Contacto() {
  return (
    <div className="container   ">
      <div className="row contacto ">
        <div className="col ">
          <form>
            <h1>CONTACTO</h1>
            <div class="mb-3">
              <h6>Email</h6>
              <label for="exampleInputEmail1" class="form-label"></label>
              <input type="email" />
            </div>
            <div class="mb-3">
              <h6>Password</h6>
              <label for="exampleInputPassword1" class="form-label"></label>
              <input type="password" />
            </div>

            <button type="submit" class="btn btn-success">
              Submit
            </button>
          </form>
        </div>
        <div className="col-md mt-4 ">
          <img
            className="contactimg "
            src="https://images6.alphacoders.com/714/thumb-1920-714381.jpg"
            alt="CONTACTO"
          />
          <p>
            Esta pagina es una mera referencia no tiene funcionalidad de envio
            de mail
          </p>
        </div>
      </div>
    </div>
  );
}
export default Contacto;
