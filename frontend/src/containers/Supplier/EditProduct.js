import React from "react";


class EditProduct extends React.Component {
  render() {
    return (
      <div className="card-column padding-25">
        <form className="ui form" action="#">
          <div class="field">
            <label>Title</label>
            <input type="text" id="idtitlu" name="titlu" placeholder="Titlu" />
          </div>
          <div class="field">
            <label>Cantitate</label>
            <input
              type="number"
              min="1"
              step="1"
              id="idquantity"
              name="quantity"
              placeholder="Cantitatea"
            />
          </div>

          <div class="field">
            <label>Stoc Total</label>
            <input
              type="number"
              min="1"
              step="1"
              id="idstoc"
              name="stoc"
              placeholder="Stocul produsului"
            />
          </div>

          <div class="field">
            <label>Pretul Produsului</label>
            <input
              type="number"
              min="1"
              id="idpretprodus"
              name="pretprodus"
              placeholder="Pretul produsului"
            />
          </div>

          <div class="field">
            <label>Description</label>
            <textarea
              type="text"
              id="idtextdescription"
              name="description"
              placeholder="Descrierea Produsului..."
            />
          </div>

          <div class="field">
            <label>Adauga Imagine</label>
            <input
              type="file"
              id="idimagineprodus"
              name="imagineprodus"
              accept="image/*"
            />
          </div>

          <div class="field">
            <label htmlFor="country">Instant Delivery</label>
            <select
              className="ui fluid dropdown"
              id="idinstantdelivery"
              name="instantdelivery"
            >
              <option value="true">Da</option>
              <option value="false">NU</option>
            </select>
          </div>

          <button class="ui primary button" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EditProduct;
