var APP_DATA = {
  "scenes": [
    {
      "id": "0-chegada",
      "name": "Chegada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4448440682774475,
          "pitch": 0.12979567891452604,
          "rotation": 0,
          "target": "1-sombra"
        },
        {
          "yaw": -0.02053189841371328,
          "pitch": 0.06833547102446857,
          "rotation": 0,
          "target": "2-acesso-teatro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-sombra",
      "name": "Sombra",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.632711883467202,
          "pitch": 0.1577512849985503,
          "rotation": 0,
          "target": "0-chegada"
        },
        {
          "yaw": 0.29582932825940844,
          "pitch": 0.10394602947675047,
          "rotation": 0,
          "target": "2-acesso-teatro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-acesso-teatro",
      "name": "Acesso Teatro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8340203381415243,
          "pitch": 0.10296616831960037,
          "rotation": 0,
          "target": "1-sombra"
        },
        {
          "yaw": 3.100669103258956,
          "pitch": 0.07376639691254994,
          "rotation": 0,
          "target": "0-chegada"
        },
        {
          "yaw": 0.032580034864675866,
          "pitch": 0.20005041907455023,
          "rotation": 0,
          "target": "3-teatro"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-teatro",
      "name": "Teatro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 500,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.120902490066377,
          "pitch": 0.15756434989677537,
          "rotation": 0,
          "target": "2-acesso-teatro"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "0E1 Arquitetos - De Rua Tulio Piva",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
