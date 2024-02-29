const Billing = () => (
  <section
    id="features"
    className="w-screen 
"
  >
    <div className="diff aspect-[16/9]  h-96">
      <div className="diff-item-1">
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
        />
      </div>
      <div className="diff-item-2">
        <img
          alt="daisy"
          src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
          style={{ filter: "blur(5px)" }}
        />
      </div>
      <div className="diff-resizer">
        <div className="grid grid-cols-3 flex-row gap-4 h-36">
          <div className="image-item">
            <img
              alt="Image 1"
              src="https://media.istockphoto.com/id/910661012/es/foto/retrato-de-sonriente-ni%C3%B1o-de-lentes-hacia-arriba-amarillo-aislado-en.jpg?s=612x612&w=0&k=20&c=vDWeXHocEjl5tB-WPb1p5F1R1bjwpkkmIBPg_T1XfGI="
            />
          </div>
          <div className="image-item">
            <img
              alt="Image 2"
              src="https://media.istockphoto.com/id/1347495819/es/foto/hombre-con-gafas-de-sol-en-amarillo.jpg?s=612x612&w=0&k=20&c=8KIG5jbugjJnDGU1CrOHuZNLb1u5ykXpDrGDPEDBwWY="
            />
          </div>
          <div className="image-item">
            <img
              alt="Image 3"
              src="https://media.istockphoto.com/id/1300314623/es/foto/mujer-%C3%A9tnica-inteligente-ajustando-gafas.jpg?s=612x612&w=0&k=20&c=Q0RpLJCoTECjTfBApvuPynFa8DXs7nHkzeCwR2wp72Q="
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Billing;
