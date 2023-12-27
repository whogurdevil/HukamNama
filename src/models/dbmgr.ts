import { contextBridge, ipcRenderer } from 'electron';


export default function connectDatabase(){
    contextBridge.exposeInMainWorld('api', {
        path: async () => {
          const path = '/home/whogurdevil/.config/hukamnama/data.db'
          const isuri = true;
          try {
            const res = await ipcRenderer.invoke('potd', path, isuri);
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        },
        // equery: async () => {
        //   const query = document.getElementById('singlequery').value
        //   const values = document.getElementById('value').value
        //   try {
        //     const arr = JSON.parse("[" + values + "]");
        //     const res = await ipcRenderer.invoke('executeQuery', query, arr[0]);
        //     document.getElementById('pout1').innerText = 'Output: ' + res;
        //   } catch (error) {
        //     document.getElementById('pout1').innerText = 'Output: ' + error;
        //   }
        // },
        // fetchall: async () => {
        //   const query = document.getElementById('fetchallquery').value
        //   const values = document.getElementById('fetchallvalue').value
        //   try {
        //     const arr = JSON.parse("[" + values + "]");
        //     const res = await ipcRenderer.invoke('fetchall', query, arr[0]);
        //     document.getElementById('poutfa').innerText = 'Output: ' + JSON.stringify(res);
        //   } catch (error) {
        //     document.getElementById('poutfa').innerText = 'Output: ' + error;
        //   }
        // },
        // fetchone: async () => {
        //   const query = document.getElementById('fetchonequery').value
        //   const values = document.getElementById('fetchonevalue').value
        //   try {
        //     const arr = JSON.parse("[" + values + "]");
        //     const res = await ipcRenderer.invoke('fetchone', query, arr[0]);
        //     document.getElementById('poutfo').innerText = 'Output: ' + JSON.stringify(res);
        //   } catch (error) {
        //     document.getElementById('poutfo').innerText = 'Output: ' + error;
        //   }
        // },
        // fetchmany: async () => {
        //   const query = document.getElementById('fetchmanyquery').value
        //   const values = document.getElementById('fetchmanyvalue').value
        //   const size = Number(document.getElementById('fetchmanysize').value)
        //   try {
        //     const arr = JSON.parse("[" + values + "]");
        //     const res = await ipcRenderer.invoke('fetchmany', query, size, arr[0]);
        //     document.getElementById('poutfm').innerText = 'Output: ' + JSON.stringify(res);
        //   } catch (error) {
        //     document.getElementById('poutfm').innerText = 'Output: ' + error;
        //   }
        // },
        // mquery: async () => {
        //   const query = document.getElementById('query').value
        //   const values = document.getElementById('values').value
        //   try {
        //     const arr = JSON.parse("[" + values + "]");
        //     const res = await ipcRenderer.invoke('executeMany', query, arr[0]);
        //     document.getElementById('pout2').innerText = 'Output: ' + res;
        //   } catch (error) {
        //     document.getElementById('pout2').innerText = 'Output: ' + error;
        //   }
        // },
        // escript: async () => {
        //   const spath = document.getElementById('scriptPath').value
        //   const res = await ipcRenderer.invoke('executeScript', spath);
        //   document.getElementById('pout3').innerText = 'Output: ' + res;
        // }
      })
}
