import { create } from 'react-test-renderer';
import { Post } from '../../../../api/src/data/posts';
import PostItem from './PostItem';

describe('Components', () => {
  const mockPost = {
    id: 'dd839012-1807-4a49-9b0c-61274f1802f5',
    title: 'Salvage',
    body: '# In et illo\n\n## Movere ora terque baculum colebatur\n\nLorem markdownum solito, vocat nata corripuere semper mitia tosta. Et ductae\ningreditur saevit vero penates laevum, et mihi longum, incalfacit est\ncommissaque, tuae locum. Redeuntis sulcat non magna\n[Sticteque](http://www.capillos.net/etsum.html), tua, ut Oceani. Mediusque adest\nsacra, [aut](http://www.mora.com/captus.html) iam Somnus nunc. Una facinus tibi\npraelata via vestem vidit minorem tacto cui?\n\n    if (southbridge(rate_file)) {\n        streaming(on_mirrored - copyright, 118971);\n        internic = right_hibernate;\n        nativeSimm.pinterestCloudPpga(primary);\n    }\n    eide_number(memory_mbps_rosetta(serverDvd - oem, -2, 1));\n    hard_subdirectory = 97 - 18;\n    if (icqMacintoshAlert == vdslHypermedia) {\n        nvramCableColumn = data_friendly(subnetScannerSocial + cms, frameMetal,\n                scraping_skyscraper);\n        firmwareControlMac(e_im, operation_telnet_metafile(3, javaDynamicKernel,\n                publishing_standalone_undo));\n        shortcut_newline_hard += netmask_signature;\n    }\n\n[Iubemur agris equo](http://viciniaper.io/) omne **curruque** proxima, meae nam,\n**adpropera** videt, litora novum, Sparte. Repetit terra, ducere prosiliunt me\nregis: Hippolytus iam poteram. Adsumere et tuque, mora tenet per et de hominis.\n\n## Supplex ardescit aequore rebus Hersilien exspectata ille\n\nEsse patrioque istis studiosius frui: laeta cum, facit caelum. Spiramenta furca\neris electus quod *semper sanguine infundere* illi: forte iram nec, in pietas\nquietis orbem, erat. Non virtute ardere cacumen perdere iramque iacuit super\nsenior placidissime caelo? Per tenebat supervolat filia damnandus, Epiros nec\npro perstet.\n\n- Nobis et temerat seductus\n- Tanto murra sanguinis humus victore imo amoris\n- Et et feri rursus\n\nEt tamen color; sacerdos est inpubibus\n[angues](http://www.incipiat.com/ipsaundis.php) est nec lenti palluit, tantum.\nBlandas Oliaros tuque pater! Hunc prima natarum, ira nocebant hasta filia, suo,\nnos sua signa, praepetis dixit tamen.\n\nCaput videam est dixit nisi, thracius praesaga una aliter, dimittit! Et\nfortisque talia et pingues nulloque vivacia dumque haberet fuit clamavit minus.',
    publishedAt: new Date('2016-01-26T20:17:00+0000'),
    author: {
      id: '9c99c399-4568-4079-960b-dbd333327b32',
      name: 'Bill Johnson',
    },
  };

  it('PostItem renders correctly', () => {
    const component = create(
      <PostItem post={mockPost} selectCurrentPost={(post: Post) => null} />
    );
    expect(component).toMatchInlineSnapshot(`
      <div
        className="post-item"
      >
        <h4
          className="post-title"
          onClick={[Function]}
        >
          Salvage
        </h4>
        <div>
          Bill Johnson
        </div>
        <div>
          January 26, 2016
           
          1:17:00 PM
        </div>
      </div>
    `);
  });
});
