<template>
  <DefaultLayout>
      <div class="brand-header">
        <div class="brand-logo">
          <strong>अर्थ</strong> Mala
        </div>
        <div class="brand-title">
          -"Art that Heals. Patterns that Speak."
        </div>
      </div>
      <div class="art-gallery">
        <div>
          <img class="mandala-art" src="../assets/lipanart.jpg">
          <p>Lipan Art</p>
        </div>
        <div>
          <img class="mandala-art" src="../assets/mirrorart.jpg">
          <p>Mandala</p>
        </div>
        <div>
          <img class="mandala-art" src="../assets/stitchingart.jpg">
          <p>Embroidery</p>
        </div>
        <div>
          <img class="mandala-art" src="../assets/crochetart.jpg">
          <p>Crochet Art</p>
        </div>
      </div>
      <div class="art-history">
          <p>
            <article>
              In spiritual practice, creating or visualizing a mandala is a form of moving meditation. 
              The symmetry calms the mind and restores emotional balance. In <strong>Tibetan Buddhism</strong>, 
              monks spend days or weeks creating sand mandalas, then ceremonially destroy them—reminding us of impermanence and mindfulness.
            Today, mandalas are used in art therapy to help reduce <strong>stress</strong> and 
            <strong>reconnect</strong> with inner peace.
            </article>
            <p>
              <em>
                "Inhale calm. Exhale creation.”
                — <strong>अर्थ</strong> Mala
              </em>
            </p>
          </p>
      </div>
      <div class="footer">
        <img class="border-line" src="../assets/border.png">
        <p><strong>अर्थ</strong> Mala&#174; &copy; All Rights Reserved @2025</p>
      </div>


  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>

<style lang="css" scoped>
.brand-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.brand-logo {
  font-size: 8em;
  font-weight: 100;
  height: 2.5em;
  height: auto;
  padding-top: 0.2em;
  color: #c3592bb2;
  strong {
    color: #c3592b;
  }
}
.brand-title {
  font-size: 1.5em;
  font-weight: 100;
  height: 2.5em;
  height: auto;
  padding-top: 0.2em;
  letter-spacing: 0.10em;
}

.art-gallery{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  text-align: center;
  margin-top: 2em;
    p {
    font-weight:200;
    letter-spacing: 0.10em;

  }
}
.mandala-art {
  justify-self: center;
  height: 35em;
  width: 18em;
  border:1px solid gray;
  margin-top: 3.5em;
  padding: 0.5em;
  object-fit: cover;
  box-shadow: 0px 1px 5px 0.5px;

}

.mandala-art:hover {
cursor: pointer;
box-shadow: 0px 2px 15px 2px;
transition: all 0.20s ease-in-out;
}


.art-history{
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  text-align: center;
  margin-bottom: 2em;
  margin-right: 10em;
  margin-left: 10em;
  margin-top: 2.5em;
  letter-spacing: 0.10em;
  font-weight: 200;
  letter-spacing: 0.125em;
  line-height:2;

    em {
      padding-top: 1.5em;
    }

    strong {
      color: #c3592b;
    }
}

.footer {
  justify-self: center;
  .border-line {
  height:12em;
  width:20em;
  }
  p {
    font-weight: 200;
    letter-spacing: 0.05em;
    strong {
      color: #c3592b;
    }
  }
}




@media (max-width: 768px) {
.brand-logo {
  font-size: 4.5em;
}

.brand-title {
  font-size: 1.2em;
  letter-spacing: 0.05em;
}

.art-gallery{
  grid-template-columns: 1fr;
}

.art-history{
  margin-bottom: 0.5em;
  margin-right: 1.5em;
  margin-left: 1.5em;
  margin-top: 2.5em;


    em {
      padding-top: 1.5em;
    }
}
}
</style>