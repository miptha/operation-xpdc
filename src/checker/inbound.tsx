import { BarcodeScanner } from "@ionic-native/barcode-scanner";
import { IonActionSheet, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonItemDivider, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from "@ionic/react"
import { call, callOutline, chevronForward, ellipseOutline, logoWhatsapp } from "ionicons/icons"
import { useState } from "react";

const inbound: React.FC = () => {
    function detailinbound(){
        window.open('/checker/inboundDetail','_self')
    }
    
    return(
    <IonPage >
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
                </IonButtons>
                <IonRow style={{textAlign:"center", justifyContent:"center"}}>
                    <IonText mode="ios" style={{color:"#0000A0", textAlign:"center", justifyContent:"center"}}>INBOUND ORDER</IonText>
                </IonRow>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <IonCard style={{border:"solid 1px #0000A0", borderRadius:"10px"}}>
                <IonGrid>
                  <IonRow style={{borderBottom:"solid 2px gray"}} onClick={detailinbound}>
                      <IonCol style={{textAlign:"start"}}>
                        <h6 style={{fontWeight:"700", color:"black", margin:"10px 5px", fontSize:"14px", marginBottom:"0"}}>XPDC2022080621</h6>
                        <button style={{padding:"5px", borderRadius:"5px", background:"#0000A0", marginLeft:"5px", color:"white"}}>Dalam Pengiriman</button>
                      </IonCol>
                      <IonCol size='2' style={{textAlign:"end", padding:"10px 0"}}>
                        <IonIcon src={chevronForward} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
                      </IonCol>
                  </IonRow>
                  <IonRow >
                    <IonCol size='2'>
                      <IonRow style={{padding:"10px 0"}}>
                        <IonIcon icon={ellipseOutline} style={{background:"#A3A3A3", width:"24px", height:"24px", borderRadius:"50%", color:"#A3A3A3", margin:"auto"}}></IonIcon>
                      </IonRow>
                      <IonRow style={{padding:"10px 0",marginTop:"10px"}}>
                        <IonIcon icon={ellipseOutline} style={{background:"#0000A0", width:"24px", height:"24px", borderRadius:"50%", color:"#0000A0", margin:"auto"}}></IonIcon>
                      </IonRow>
                    </IonCol>
                    <IonCol>
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
                      {/* {a['id']} */}
                        <h6 style={{margin:0, padding:0, color:"black"}}>
                          PT. MAJU JAYA
                        </h6>
                        <p style={{margin:0, padding:0}}>
                          Kepuluan Riau, Indonesia
                        </p>
                      </IonRow>
                      {/* <IonItem lines='none'> 
                          <a href='/orderdetail?order_id=' slot="end" ><IonIcon icon={chevronForwardOutline} ></IonIcon></a>
                      </IonItem> */}
                      <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column", marginTop:"10px"}}>
                      <h6 style={{margin:0, padding:0, color:"black"}}>
                        PT. SUKSES SELALU
                        </h6>
                        <p style={{margin:0, padding:0}}>
                         Sleman, Yogyakarta, Indonesia
                        </p>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonCard>
          </IonContent>
    </IonPage>
    )
}

export default inbound