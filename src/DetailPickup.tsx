import { IonActionSheet, IonAlert, IonAvatar, IonButton, IonButtons, IonCard, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonText, IonTextarea, IonTitle, IonToolbar, useIonAlert } from "@ionic/react"
import { add, addCircleSharp, callOutline, checkboxOutline, checkmarkOutline, chevronBackOutline, closeCircle, closeOutline, createOutline, ellipseOutline, logoWhatsapp, pencilOutline, printOutline } from "ionicons/icons"
import { useState } from "react";
import { useHistory } from "react-router";
import './DetailPickup.css';

const DetailPickup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenShipment, setIsOpenShipment] = useState(false);
    const [isOpenGagalPickup, setIsOpenGagalPickup] = useState(false);
    const [showAction, setShowAction] = useState(false);
    const history = useHistory();
    const [presentAlert] = useIonAlert();

    function openAction(){
        setShowAction(true)
    }
return(
    <IonPage>
    <IonHeader>
        <IonToolbar>
            {/* <IonButtons slot="start">
                <IonMenuButton style={{color:"#0000A0", fontSize:"30px"}}/>
            </IonButtons> */}
            
            <div style={{textAlign:"start", display:"flex", margin:"10px 0"}}>
              <button onClick={history.goBack} style={{padding:"0" ,border:"none" , background: "transparent"}}>
                  <IonIcon icon={chevronBackOutline} id='iconBack' style={{fontSize:"32px" , margin:"0", color:"#0000A0"}}/>
              </button>
              <IonTitle>Detail Pickup</IonTitle>
              <IonButtons slot="end" style={{textAlign:"end"}}>
                <IonButton onClick={() => setIsOpenShipment(true)} style={{textAlign:"end"}}>
                  <IonIcon src={addCircleSharp} style={{fontSize:"36px", color:"#0000A0", textAlign:"end"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </div>
        </IonToolbar>
    </IonHeader>
    <IonContent>
        <IonRow style={{margin:"15px", borderBottom:"1px solid black", paddingBottom:"5px"}}>
            <IonCol style={{textAlign:"start"}}>
                <IonText mode="ios" style={{fontSize:"18px", fontWeight:"bold"}}>No.Tracking</IonText>
            </IonCol>
            <IonCol style={{textAlign:"end"}}>
                <IonText mode="ios" style={{fontSize:"18px"}}>XPDC2022080621</IonText>
            </IonCol>
        </IonRow>
        <IonRow style={{borderBottom:"1px solid black", margin:"15px"}}>
            <IonCol size='2'>
              <IonRow style={{padding:"10px 0"}}>
                <IonIcon icon={ellipseOutline} style={{background:"#A3A3A3", width:"24px", height:"24px", borderRadius:"50%", color:"#A3A3A3", margin:"auto"}}></IonIcon>
              </IonRow>
              <IonRow style={{padding:"10px 0",marginTop:"20px"}}>
                <IonIcon icon={ellipseOutline} style={{background:"#0000A0", width:"24px", height:"24px", borderRadius:"50%", color:"#0000A0", margin:"auto"}}></IonIcon>
              </IonRow>
            </IonCol>
            <IonCol style={{padding:"0"}}>
              <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column"}}>
              {/* {a['id']} */}
                <h6 style={{margin:0, padding:0, color:"black"}}>
                  Dikha Fransnanda
                </h6>
                <p style={{margin:0, padding:0}}>
                  Kepulauan Riau, Indonesia
                </p>
              </IonRow>
              <IonRow style={{textAlign:"start", padding:"5px 0", display:"flex", flexDirection:"column",marginTop:"5px"}}>
              <h6 style={{margin:0, padding:0, color:"black"}}>
                 Miptha
                </h6>
                <p style={{margin:0, padding:0}}>
                  Tangerang, Banten, Indonesia
                </p>
              </IonRow>
            </IonCol>
            <IonCol size="1" style={{marginRight:"20px"}}>
              <IonRow>
                <IonCol>
                  <IonIcon src={logoWhatsapp} style={{fontSize:"30px", color:"#27dd89"}}></IonIcon>
                </IonCol>
                <IonCol>
                  <IonIcon src={logoWhatsapp} style={{fontSize:"30px", color:"#27dd89", marginTop:"20px"}}></IonIcon>
                </IonCol>
              </IonRow>
            </IonCol>
            <IonCol size="1" style={{marginRight:"10px"}}>
              <IonRow>
                <IonCol>
                  <IonIcon src={callOutline} style={{fontSize:"30px", color:"#0000A0"}}></IonIcon>
                </IonCol>
                <IonCol>
                  <IonIcon src={callOutline} style={{fontSize:"30px", color:"#0000A0", marginTop:"20px"}}></IonIcon>
                </IonCol>
              </IonRow>
            </IonCol>
          </IonRow>
          
          <IonCard style={{ fontSize:"16px",  border:"1px solid #0000A0"}} >
            <IonRow style={{padding:"10px", borderBottom:"1px solid #0000A0", margin:"0"}}>
              <IonCol style={{textAlign:"start", }}>
                <IonText mode="ios" style={{color:"black", fontWeight:"bold"}}>XPDC2022080621</IonText>
              </IonCol>
              <IonCol size="2" style={{textAlign:"end", padding:"0"}} onClick={() => setIsOpen(true)}>
                <button style={{padding:"10px", borderRadius:"5px", background:"#0000A0" ,fontSize:"14px", color:"white"}}>Ubah</button>
              </IonCol>
            </IonRow>
            <IonRow style={{padding:"0"}}>
              <IonCol style={{marginLeft:"5px"}}>
                <IonRow>
                    <IonText>Berat</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Panjang</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Lebar</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Tinggi</IonText>
                  </IonRow>
              </IonCol>
              <IonCol style={{marginLeft:"5px"}}>
                  <IonRow>
                    <IonText>Status Scan</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Status Reweight</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Quantity</IonText>
                  </IonRow>
                  <IonRow>
                    <IonText>Jumlah Koli</IonText>
                  </IonRow>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonRow style={{margin:"0", padding:"0"}}>
            <IonText mode="ios" style={{fontSize:"18px", marginLeft:"15px", padding:"0", }}>Detail Order</IonText>
          </IonRow>
          <IonCard style={{ fontSize:"16px", borderRadius:"10px 10px 0 0"}} >
            <IonRow style={{padding:"10px", background:"#0000A0"}}>
                <IonText mode="ios" style={{color:"white"}}>XPDC2022080621-1</IonText>
            </IonRow>
            <IonRow style={{padding:"0"}}>
                <IonCol >
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Berat: 10 Kg</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Scan:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"0"}}>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Panjang: 10 cm</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Reweight:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Lebar: 10 cm</IonText>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Tinggi: 10 cm</IonText>
            </IonRow>
          </IonCard>
          <IonCard style={{fontSize:"16px", borderRadius:"10px 10px 0 0" }} >
            <IonRow style={{padding:"10px", background:"#0000A0"}}>
                <IonText mode="ios" style={{color:"white"}}>XPDC2022080621-2</IonText>
            </IonRow>
            <IonRow style={{padding:"0"}}>
                <IonCol >
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Berat: 10 Kg</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Scan:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"0"}}>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Panjang: 10 cm</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Reweight:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Lebar: 10 cm</IonText>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Tinggi: 10 cm</IonText>
            </IonRow>
          </IonCard>
          <IonCard style={{fontSize:"16px", borderRadius:"10px 10px 0 0" }} >
            <IonRow style={{padding:"10px", background:"#0000A0"}}>
                <IonText mode="ios" style={{color:"white"}}>XPDC2022080621-3</IonText>
            </IonRow>
            <IonRow style={{padding:"0"}}>
                <IonCol >
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Berat: 10 Kg</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Scan:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"0"}}>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Panjang: 10 cm</IonText>
                </IonCol>
                <IonCol>
                    <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Status Reweight:</IonText>
                </IonCol>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Lebar: 10 cm</IonText>
            </IonRow>
            <IonRow style={{padding:"0", margin:"5px"}}>
                <IonText mode="ios" style={{fontSize:"16px", color:"black"}}>Tinggi: 10 cm</IonText>
            </IonRow>
          </IonCard>

          {/* IonModal  Ubah Koli*/}
          <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Update Jumlah Koli</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>
                  <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonLabel>Jumlah Koli</IonLabel>
            <IonInput placeholder="Masukan Jumlah Koli" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
          </IonContent>
        </IonModal>
        {/* Tutup Modal */}

         {/* IonModal  Tambah Shipment*/}
         <IonModal isOpen={isOpenShipment}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Tambah Data Pickup</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpenShipment(false)}>
                  <IonIcon src={closeCircle} style={{fontSize:"36px", color:"#0000A0"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <IonLabel>Jumlah Barang</IonLabel>
            <IonInput placeholder="Masukan Jumlah Barang" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Berat(Kg)</IonLabel>
            <IonInput placeholder="Masukan Berat" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Jumlah Koli</IonLabel>
            <IonInput placeholder="Masukan Jumlah Koli" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Panjang(cm)</IonLabel>
            <IonInput placeholder="Masukan Panjang" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Lebar(cm)</IonLabel>
            <IonInput placeholder="Masukan Lebar" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <IonLabel>Tinggi(cm)</IonLabel>
            <IonInput placeholder="Masukan Tinggi" type="number" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonInput>
            <button style={{padding:"15px", marginTop:"10px", width:"100%", borderRadius:"5px", background:"#0000A0", color:"white"}}>SIMPAN</button>
          </IonContent>
        </IonModal>
        {/* Tutup Modal */}

        {/* Modal gagal pickup */}
        <IonModal id="example-modal" isOpen={isOpenGagalPickup}>
          <IonContent>
            <IonToolbar>
              <IonTitle>Alasan Gagal Pickup</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => setIsOpenGagalPickup(false)}>
                  <IonIcon src={closeCircle} style={{fontSize:"36px"}}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <div style={{padding:"15px"}}>
              <IonLabel>Alasan</IonLabel>
              <IonTextarea placeholder="Masukan alasan gagal pickup" style={{background:"#DEDEDE", borderRadius:"5px", marginTop:"10px"}}></IonTextarea>
              <button style={{padding:"15px",marginTop:"10px",width:"100%", background:"#0000A0",borderRadius:"5px", color:"white"}}>SIMPAN</button>
            </div>
          </IonContent>
        </IonModal>

        
          <IonActionSheet
        isOpen={showAction}
        onDidDismiss={() => setShowAction(false)}
        buttons={[{
          text: 'Konfirmasi Pickup',
        //   handler: () => {
            
        //   }
        },{
          text: 'Gagal Pickup',
        //   role:'destructive',
          handler: () => {setIsOpenGagalPickup(true)}
        },{
            text: 'Update Jumlah Koli',
          //   role:'destructive',
            handler: () => {setIsOpen(true)
          //     ;
              
            }
        }, {
          text: 'Cancel',
          role: 'cancel',
        //   handler: () => {
        //     console.log('cancel');
        //   }
        }]}
        mode='ios'
      >
      </IonActionSheet>


    </IonContent>
    <IonFooter style={{background:"white"}}>
            <IonGrid style={{padding:"10px 0", margin:"5px"}} onClick={openAction}>
                <IonRow>
                    <button style={{width:"100%", background:"#0000A0", borderRadius:"10px", display:"flex",justifyContent:"center"}} >
                        <IonText mode='ios' style={{fontSize:"16px", color:"white", margin:"15px 5px"}}>
                            ACTION
                        </IonText>
                    </button>
                </IonRow>
                </IonGrid>
        </IonFooter>

      
</IonPage>
)
}
export default DetailPickup