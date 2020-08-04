<template>
  <div class="gmaps-container">
    <div class="first-screen">
      <div class="gmaps-container__input">
        <gmap-autocomplete
            placeholder="Enter the address"
            @place_changed="changeCenter">
        </gmap-autocomplete>
      </div>
      <GmapMap
          class="gmaps-container__map"
          :center="center"
          :zoom="17"
          map-type-id="terrain"
          :options="{
           zoomControl: true,
           mapTypeControl: false,
           scaleControl: false,
           streetViewControl: false,
           rotateControl: false,
           fullscreenControl: true,
           disableDefaultUI: false
         }"
      >
        <GmapMarker
            :key="index"
            v-for="(marker, index) in markers"
            :position="marker"
            :clickable="true"
            :draggable="false"
            :label="marker.title"
        />
      </GmapMap>
      <div
          class="gmaps-container__btn"
          @click="popupShow"
      >
        POST YOUR AD
      </div>
    </div>

    <div class="second-screen" v-if="popup">
      <div class="second-screen__back" @click="popupShow">
        <img alt="Vue logo" src="../images/arrow.svg">
      </div>
      <div class="second-screen__back2"></div>
      <img class="second-screen__add" alt="Vue logo" src="../images/addPhoto.png">
      <div class="input-wrapper">
        <div class="input-wrapper__title">
          Property Address
        </div>
        <gmap-autocomplete
            placeholder="Enter the address"
            @place_changed="marker">
        </gmap-autocomplete>
      </div>

      <div class="input-wrapper">
        <div class="input-wrapper__title">
          Property Title
        </div>
        <input type="text" placeholder="Your property title" v-model="title">
      </div>

      <div class="input-wrapper">
        <div class="input-wrapper__title">
          Describe more about your property
        </div>
        <input type="text" placeholder="Enter any notes here...">
      </div>
      <div
          class="gmaps-container__btn"
          @click="setMarker"
      >
        POST
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {db} from "@/firebase/firebase";


@Component
export default class HelloWorld extends Vue {
  private center = {lat:54.9590287, lng:73.39482319999999};
  private markers: any = [];
  private popup = false;
  public title = "";
  private autocompleteInfo: any;

  private async changeCenter (payload: any): Promise<void> {
    this.center.lat = payload.geometry.location.lat();
    this.center.lng = payload.geometry.location.lng();
  }

  private async marker (payload: any): Promise<void> {
    this.autocompleteInfo = payload;
    this.center.lat = payload.geometry.location.lat();
    this.center.lng = payload.geometry.location.lng();
  }

  private async setMarker (): Promise<void> {
    this.popup = !this.popup;
    const data = {
      lat: this.autocompleteInfo.geometry.location.lat(),
      lng: this.autocompleteInfo.geometry.location.lng(),
      title: this.title
    };
    this.markers.push(data)
    await db.collection('coords').add(data);
  }

  private async popupShow (): Promise<void> {
    this.popup = !this.popup;
  }

  private async mounted() {
    const coords = db.collection('coords');
    const cursor = await coords.get();
    const items = cursor.docs.map(doc => doc.data());
    this.markers = items;
  }
}
</script>

<style scoped lang="scss">
.gmaps-container {
  padding-top: 60px;
  overflow: hidden;
  height: calc(100vh - 60px);
  width: 100%;
  .first-screen {
    height: 100%;
  }
  .second-screen {
    height: calc(100vh - 60px);
    background: #fff;
    max-width: 540px;
    z-index: 101;
    position: fixed;
    width: 100%;
    top: 60px;
    .input-wrapper {
      width: calc(100% - 40px);
      margin: 50px 20px 0 20px;
      overflow: hidden;
      input {
        max-width: 500px;
        border: none;
        width: 100%;
        border-bottom: 1px solid grey;
        font-size: 20px;
      }
      &__title {
        text-align: left;
        font-size: 18px;
        margin-bottom: 20px;
        font-weight: bold;
      }
    }
    &__back {
      left: 0;
      top: -60px;
      width: 60px;
      height: 60px;
      position: absolute;
      background-color: #D50320;
      display: flex;
      align-items: center;
      justify-content: center;
      align-content: center;
      svg {
        width: 45px;
      }
    }
    &__back2 {
      right: 0;
      top: -60px;
      width: 60px;
      height: 60px;
      position: absolute;
      background-color: #D50320;
    }
    &__add {
      width: 95px;
      margin-top: 30px;
    }
    .gmaps-container__btn {
      position: static;
      margin-top: 120px;
    }
  }
  &__map {
    height: 100%;
    width: 100%;
  }
  &__input {
    position: absolute;
    top: 70px;
    z-index: 100;
    left: 20px;
    right: 20px;
    input {
      width: 100%;
      height: 38px;
      border-radius: 18px;
      border: none;
      text-indent: 21px;
      font-size: 17px;
      color: #303030;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.3);
    }
  }
  &__btn {
    cursor: pointer;
    bottom: 30px;
    z-index: 100;
    position: absolute;
    width: 250px;
    height: 45px;
    background-color: #D50320;
    left: 0;
    right: 0;
    margin: 0 auto;
    color: #fff;
    font-size: 21px;
    line-height: 46px;
    border-radius: 40px;
    @media (max-width: 540px) {
      bottom: 100px;
    }
  }
}
</style>
