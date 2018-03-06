

public class PCandide {

  // myParent is a reference to the parent sketch
  private String[] wfm;
  private PShape candideG = createShape(GROUP);
  private PVector[] vertices;
  private int[][] faces;
  private AnimationUnit[] auList;
  private int apply;
  private int[] randomIndex;
  float xoff = 0.0;
  int intervalle;
  int index;

  private final static int CNT = 59;
  public final static String VERSION = "1.1.0";

  /**
   * a Constructor, usually called in the setup() method in your sketch to
   * initialize and start the library.
   * 
   * @example Hello
   * @param theParent
   */
  public PCandide( String _s) {
    wfm = loadStrings(_s);
    parseWfm();
    apply = -1;
  }




  private void parseWfm() {
    auList = new AnimationUnit[CNT];
    int i = skipTo(0, "VERTEX LIST");
    if (i > -1) {
      String ln = PApplet.trim(wfm[i]);
      int n = Integer.parseInt(ln);
      vertices = new PVector[n];
      i++;
      for (int j = 0; j < n; j++) {
        String vStr = PApplet.trim(wfm[i]);
        String[] pt = PApplet.splitTokens(vStr, " ");
        vertices[j] = new PVector(0.0f, 0.0f, 0.0f);
        vertices[j].x = Float.parseFloat(pt[0]);
        vertices[j].y = Float.parseFloat(pt[1]);
        vertices[j].z = Float.parseFloat(pt[2]);
        i++;
      }
    }

    i = skipTo(i, "FACE LIST");
    if (i > -1) {
      String ln = PApplet.trim(wfm[i]);
      int n = Integer.parseInt(ln);
      faces = new int[n][3];
      i++;
      for (int j = 0; j < faces.length; j++) {
        String fStr = PApplet.trim(wfm[i]);
        String[] fs = PApplet.splitTokens(fStr, " ");
        faces[j] = new int[3];
        faces[j][0] = Integer.parseInt(fs[0]);
        faces[j][1] = Integer.parseInt(fs[1]);
        faces[j][2] = Integer.parseInt(fs[2]);
        i++;
      }
    }
    i = skipTo(i, "ANIMATION UNITS LIST");
    if (i < 0) {
      return;
    }

    i++;

    for (int j = 0; j < CNT; j++) {
      i = skipToAUV(i, "AUV");
      if (i < 0) {
        continue;
      }
      String ln2 = PApplet.trim(wfm[i]);
      int n2 = Integer.parseInt(ln2);
      i++;
      auList[j] = new AnimationUnit(n2);
      for (int k = 0; k < n2; k++) {
        String[] auStr = PApplet.splitTokens(PApplet.trim(wfm[i]), " ");
        int vt = Integer.parseInt(auStr[0]);
        float vx = Float.parseFloat(auStr[1]);
        float vy = Float.parseFloat(auStr[2]);
        float vz = Float.parseFloat(auStr[3]);
        auList[j].addTo(vt, new PVector(vx, vy, vz));
        i++;
      }
    }
    
    randomIndex = new int[faces.length];
    int count = 0;
    int count2 = 0;
    int randomN = 0;
    int sens =0;
    while(count < faces.length){
      
      if(count2 == 0){
        randomN = int(random(0,faces.length));
        int[] minMax = {-1,1};
        sens = minMax[int(random(0,2))];
      }
  
      boolean hasValue = false;
      for(int d = 0;d<count;d++){
        if(randomN == randomIndex[d]){
          hasValue = true;
        }
      }
      
      int r = randomN;
      r += sens;
      if(hasValue == false && (r)<faces.length && (r)>0 && count2 < 7){
          randomIndex[count] = randomN;
          count ++;
          randomN+=sens;
          count2++;
      }else{
        count2 = 0;
      }
    }
    
  }

  public void applyAU(int _i) {
    apply = _i;
  }
  
  public void applyRandom() {
    apply = floor(random(CNT));
  }

  public void reset() {
    apply = -1;
  }

  public void updateRender(float _f, float normTime) {
    int numberOfFace = int(normTime * faces.length+1);
    if(numberOfFace<faces.length){
        PShape path = createShape();
        path.beginShape(POINTS);
        path.stroke(255);
        path.strokeWeight(1);
        path.noFill();
        for (int j = 0; j < 3; j++) {
          int vt = faces[randomIndex[numberOfFace]][j];
          
          PVector dis;
          
          if (apply == -1) {
            dis = new PVector(0.0f, 0.0f, 0.0f);
          } else {
            dis = auList[apply].getMotion(vt);
          }
  
          path.vertex((vertices[vt].x + dis.x)*_f, (vertices[vt].y + dis.y)*-_f,
              (vertices[vt].z + dis.z)*_f);
        }
        path.endShape();
        candideG.addChild(path);
    }else{
      candideG = null;
      candideG = createShape(GROUP);
    }
  }
  
  public void updateRender(float _f,int time) {
      int timer = time / faces.length;
    if(index<faces.length && intervalle<millis()){
        PShape path = createShape();
        path.beginShape(TRIANGLES);
        path.stroke(255);
        path.strokeWeight(1);
        path.noFill();
        for (int j = 0; j < 3; j++) {
          int vt = faces[randomIndex[index]][j];
          
          PVector dis;
          
          if (apply == -1) {
            dis = new PVector(0.0f, 0.0f, 0.0f);
          } else {
            dis = auList[apply].getMotion(vt);
          }
  
          path.vertex((vertices[vt].x + dis.x)*_f, (vertices[vt].y + dis.y)*-_f,
              (vertices[vt].z + dis.z)*_f);
        }
        path.endShape();
        candideG.addChild(path);
        intervalle = millis() + timer;
        index++;
    }
  }
  
  public void render(PGraphics b){
    b.shape(candideG);
  }
  

  private int skipToAUV(int _s, String _p) {
    int i = _s;
    boolean found = false;
    while (i < wfm.length && !found) {
      String ln = trim(wfm[i]);
      if (ln.equals("")) {
        i++;
        continue;
      }
      String token = wfm[i].substring(2, 5);
      if (token.equals(_p)) {
        found = true;
      }
      i++;
    }
    if (found) {
      return i;
    } else {
      return -1;
    }
  }

  private int skipTo(int _s, String _p) {
    int i = _s;
    boolean found = false;
    while (i < wfm.length && !found) {
      String ln = trim(wfm[i]);
      if (ln.equals("")) {
        i++;
        continue;
      }
      char c1 = ln.charAt(0);
      char c2 = ln.charAt(ln.length() - 1);
      if (c1 == '#' && c2 == ':') {
        String p1 = ln.substring(2, ln.length() - 1);
        if (p1.equals(_p)) {
          found = true;
        }
      } else {
        i++;
        continue;
      }
      i++;
    }
    if (found) {
      return i;
    } else {
      return -1;
    }
  }
}



public class AnimationUnit {
  private PVector[] motions;
  private int[] nodes;
  private int idx;

  public AnimationUnit(int _n) {
    motions = new PVector[_n];
    nodes = new int[_n];
    for (int i = 0; i < motions.length; i++) {
      motions[i] = new PVector(0.0f, 0.0f, 0.0f);
      nodes[i] = -1;
    }
    idx = 0;
  }

  public void addTo(int _n, PVector _v) {
    if (idx < motions.length) {
      nodes[idx] = _n;
      motions[idx].x = _v.x;
      motions[idx].y = _v.y;
      motions[idx].z = _v.z;
      idx++;
    }
  }

  public int getSize() {
    return nodes.length;
  }

  public PVector getMotion(int _i) {
    int temp = -1;
    for (int i = 0; i < nodes.length; i++) {
      if (_i == nodes[i]) {
        temp = i;
        break;
      }
    }
    if (temp > -1) {
      return motions[temp];
    } else {
      return new PVector(0.0f, 0.0f, 0.0f);
    }
  }
}